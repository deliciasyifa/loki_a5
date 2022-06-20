module.exports ={
    fetchData: (db, callback) => {
        db.query("SELECT * FROM course_plans", callback)
    },

    getById: (db, id, callback) => {
        db.query("SELECT * FROM course_plans WHERE id = ",id, callback)
    },
    insertData: (db, data, callback) => {
        db.query("INSERT INTO course_plans SET ?",data, callback) 
    }, 
    updateData: (db, id, data, callback) => {
        db.query("UPDATE course_plans SET ? WHERE id = ",id, data, callback) 
    }, 
    deleteData: (db, id, callback) => {
        db.query("DELETE FROM course_plans WHERE id = ",id, callback)
    }
}
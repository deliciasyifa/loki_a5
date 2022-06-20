module.exports ={
    fetchData: (db, callback) => {
        db.query("SELECT * FROM rps", callback)
    },

    getById: (db, id, callback) => {
        db.query("SELECT * FROM rps WHERE id = ",id, callback)
    },
    insertData: (db, data, callback) => {
        db.query("INSERT INTO rps SET ?",data, callback) 
    }, 
    updateData: (db, id, data, callback) => {
        db.query("UPDATE rps SET ? WHERE id = ",id, data, callback) 
    }, 
    deleteData: (db, id, callback) => {
        db.query("DELETE FROM rps WHERE id = ",id, callback)
    }
}
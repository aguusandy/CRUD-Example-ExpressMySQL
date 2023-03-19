
import {pool} from '../db.js';

// get function consult to the database all rows
export const getStructures = async (request,response) => {
    try{
        const [query_result] = await pool.query('SELECT * FROM structures');
        if (  query_result.length > 0){
            response.json(query_result);
        }else{
            response.status(404).json({message: 'No structures found'});
        }
    }catch (error){
       return response.status(500).json({message: 'Error in consult'});
    }

    
};
// get function consult the database by id of the structure table
export const getStructureById = async (request,response) => {
    try{
        const [query_result] = await pool.query('SELECT * FROM structures WHERE id = ?',[request.params.id]);
        if( query_result.length > 0){
            response.json(query_result[0]);
        }else{
            response.status(404).json({message: 'Not Found'})
        }
    }catch(error){
        return response.status(500).json({message: 'Error in consult'});
    }
};

// post function create a new row in the table of the database
export const createStructures = async (request,response) => {
    const {name,description} = request.body;
    try {
        if(name == null || description == null){
            return response.status(404).json({message: 'Fields incompleted'});
        }
        const [query_result] = await pool.query('INSERT INTO structures(name,description) VALUES (?,?)', [name,description]);
        if ( query_result.affectedRows > 0){
            response.json({
                message:'Structure created successfully ',
                id:query_result.insertId,
                name,
                description
            });
        }else{
            response.status(404).json({message: 'Error while creating a structure'})
        }
    } catch (error) {
            return response.status(500).json({message: 'Error creating'});
    }
   
};

export const updateStructures = async (request,response) => {
    const {name,description} = request.body;
    const id = request.params.id;
    try {
        if(name == null || description == null){
            return response.status(404).json({message: 'Fields incompleted'});
        }
        const [query_result] = await pool.query('UPDATE structures SET name = ?,description = ? WHERE id = ?',[name,description,id]);
        if(query_result.affectedRows > 0){
            response.json({message:'Structure updated successfully',id,name,description});
        }else{
            response.status(404).json({message: 'Error while updating'})
        }
    } catch (error) {
        return response.status(500).json({message: 'Error updating'});
    }
};

export const deleteStructures = async (request,response) => {
    try {
        const [query_result] = await pool.query('DELETE FROM structures WHERE id = ?',[request.params.id]);
        if (query_result.affectedRows > 0){
            response.json({message: 'Structure deleted successfully'});
        }else{
            response.status(404).json({message: 'Error while deleting'})
        }
    } catch (error) {
        return response.status(500).json({message: 'Error deleting'});
    }
};
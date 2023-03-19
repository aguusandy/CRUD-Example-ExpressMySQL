// imports
import { Router } from "express";
import {getStructures,createStructures,updateStructures,deleteStructures,getStructureById} from '../controllers/structures.controllers.js';

const router = Router();

//function calls
router.get('/structures/:id',getStructureById);
router.get('/structures', getStructures);
router.post('/structures', createStructures);
router.put('/structures/:id', updateStructures);
router.delete('/structures/:id', deleteStructures);

export default router;
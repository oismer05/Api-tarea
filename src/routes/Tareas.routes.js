import {Router} from 'express' 

const router = Router();

import * as controllerTarea from '../controllers/Tarea.controller'; 

router.post('/',controllerTarea.Addutarea);
router.get('/',controllerTarea.Gettarea);
router.get('/:id',controllerTarea.GettareaId) 
router.put('/:id',controllerTarea.Updatetarea)
router.delete('/:id',controllerTarea.Deletetarea)
export default router; 
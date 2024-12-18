import { Router } from 'express';
import { createAsset, getALlAssets, getOneAsset, updateAsset } from '../controllers/Assets.controller';

const assets = Router()



assets.get('/',getALlAssets)
assets.get('/:id',getOneAsset)
assets.post('/',createAsset)
assets.put('/:id',updateAsset)

export default assets
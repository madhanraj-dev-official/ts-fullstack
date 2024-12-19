import { Router } from 'express';
import { join } from 'path';
import rootDir from '../../rootDir';
import express from 'express';

const asset = Router()

// Assets Location
const assetLocation = join(rootDir,"storage","upload")

//assets
const staticAsset = join(assetLocation,"assets")
const imageAsset = join(assetLocation,"images")
const kidAsset = join(assetLocation,"kids")
const resumeAsset = join(assetLocation,"resume")

// Static Assets
asset.use('/asset',express.static(staticAsset))

// Image Assets
asset.use('/image',express.static(imageAsset))

// Kids Assets
asset.use('/kids',express.static(kidAsset))

// Resume Assets
asset.use('/resume/:pdf',(req,res)=>{

    res.download(join(resumeAsset,req.params.pdf))
})

export default asset
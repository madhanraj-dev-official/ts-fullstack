import { Router } from 'express';
import { join } from 'path';
import rootDir from '../../rootDir';
import express from 'express';

const asset = Router()

// Assets Location
const assetLocation = join(rootDir,"storage","upload")

//assets
const staticAsset = join(assetLocation,"assets","assets")
const imageAsset = join(assetLocation,"assets","images")
const kidAsset = join(assetLocation,"assets","kids")
const resumeAsset = join(assetLocation,"assets","resume")

// Static Assets
asset.use('/asset',express.static(staticAsset))

// Image Assets
asset.use('/image',express.static(imageAsset))

// Kids Assets
asset.use('/kids',express.static(kidAsset))

// Resume Assets
asset.use('/resume',express.static(resumeAsset))

export default asset
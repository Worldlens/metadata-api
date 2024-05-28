"use strict";

const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "barcode";
const COLLECTION_NAME = "barcodes";

var barcodeSchema = new Schema(
    {
        country: {
            type: String,
            required: true,
        },
        start: {
            type: Number,
        },
        end: {
            type: Number,
        },
        barcode: {
            type: Number,
        },
        isDelete: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    }
);

module.exports = model(DOCUMENT_NAME, barcodeSchema);

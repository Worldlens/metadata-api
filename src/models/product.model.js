"use strict";

const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "product";
const COLLECTION_NAME = "products";

var productSchema = new Schema(
    {
        code: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        images: {
            type: [String],
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        explorer: {
            type: String,
            required: true,
        },
        isDelete: {
            type: Boolean,
            default: false,
        },
        manufactureCode: {
            type: Number,
            default: true,
        },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    }
);

module.exports = model(DOCUMENT_NAME, productSchema);

const VerifiedListing = require('../../../../models/listings/VerifiedListing.js');
const {
    fieldSanitizer,
} = require('../../../../controllers/helpers/modelHelpers.js');
const AdminBro = require('admin-bro');
const bcrypt = require('bcryptjs');
const listingsParent = require('./listingsParent');
const _ = require('underscore');

const canModifyVerifiedListings = ({
    currentAdmin
}) => currentAdmin && currentAdmin.role === 'Administrator';

const VerifiedListingAdminOptions = {
    resource: VerifiedListing,
    options: {
        properties: {
            createdAt: {
                isVisible: {
                    edit: false,
                },
            },
            createdBy: {
                isVisible: {
                    edit: false,
                },
            },
            currentPrice: {
                isVisible: {
                    edit: false,
                },
            },
            slug: {
                isVisible: {
                    edit: false,
                },
            },
            images: {
                components: {
                    edit: AdminBro.bundle(
                        '../../../../ui/components/ImageUpload.jsx',
                    ),
                    show: AdminBro.bundle(
                        '../../../../ui/components/ImageList.jsx',
                    )
                },
            }
        },
        parent: listingsParent,
        actions: {
            new: {
                before: async (request, response, context) => {
                   console.log("H")
                    return request;
                },
            },
            edit: {
                before: async (request, response, context) => {
                    const { headers } = request
                    console.log("HI")
                    if (request.method === 'get') {
                        const {
                            payload
                        } = request;
                        const result = await fieldSanitizer(payload, VerifiedListing);
                        if (result.isError) {
                            console.log(result.errors);
                            throw new ValidationError(result.errors);
                        }
                        request.payload = result.payload;
                    }
                    return request;
                },
            },
            show: {
                before: async (req, res, context) => {
                    console.log('hihihihi')
                    return req
                }
            }
            // delete: { isAccessible: canModifyVerifiedListings }
        },
    },
};

module.exports = VerifiedListingAdminOptions;
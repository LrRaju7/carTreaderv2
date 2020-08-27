const VerifiedListing = require('../../../../models/listings/VerifiedListing.js');
const {
    fieldSanitizer,
} = require('../../../../controllers/helpers/modelHelpers.js');
const { listingConfigOptions } = require('./config.js')
const listingsParent = require('./listingsParent');

const canModifyVerifiedListings = ({
    currentAdmin
}) => currentAdmin && currentAdmin.role === 'Administrator';

const VerifiedListingAdminOptions = {
    resource: VerifiedListing,
    options: { ...listingConfigOptions,
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
            }
            // delete: { isAccessible: canModifyVerifiedListings }
        },
    },
};

module.exports = VerifiedListingAdminOptions;
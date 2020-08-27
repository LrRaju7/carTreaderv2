const AdminBro = require('admin-bro');

exports.listingConfigOptions = {
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
                    ),
                    approve: AdminBro.bundle(
                        '../../../../ui/components/ImageList.jsx',
                    ),
                },
            }
        }
}
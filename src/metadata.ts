/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./modules/wallet/user/user-wallet.dto"), { "GetTokenBalanceDto": { wallet: { required: true, type: () => String }, blockchain: { required: true, type: () => Object } }, "GetTokenPriceDto": { token_contract: { required: true, type: () => String }, blockchain: { required: true, type: () => Object } } }], [import("./models/error.entity"), { "UnhandledErrorData": { id: { required: true, type: () => String }, data: { required: true, type: () => String }, createdAt: { required: true, type: () => Date } } }], [import("./helpers/helper.dto"), { "IdRequired": { id: { required: true, type: () => String } }, "IdOptional": { id: { required: true, type: () => String } } }], [import("./models/base-model.entity"), { "BaseModel": { id: { required: true, type: () => String }, deletedAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, createdAt: { required: true, type: () => Date } } }], [import("./models/user.entity"), { "User": { wallet: { required: true, type: () => String }, type: { required: true, type: () => Object }, lastForcedLogout: { required: true, type: () => Date } } }]], "controllers": [[import("./modules/wallet/user/user-wallet.controller"), { "UserWalletController": { "getAll": { type: Object }, "getPrice": { type: String }, "getCurrencies": { type: [Object] } } }]] } };
};
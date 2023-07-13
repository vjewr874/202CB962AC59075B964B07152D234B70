const {
  initDB: AppUserMembershipResourceAccess,
} = require('./API/AppUserMembership/resourceAccess/AppUserMembershipResourceAccess.js');
const { initDB: AppUsersResourceAccess } = require('./API/AppUsers/resourceAccess/AppUsersResourceAccess.js');
const { initDB: BetRecordsResourceAccess } = require('./API/BetRecords/resourceAccess/BetRecordsResourceAccess.js');
const {
  initDB: CustomerMessageResourceAccess,
} = require('./API/CustomerMessage/resourceAccess/CustomerMessageResourceAccess.js');

const {
  initDB: GroupCustomerMessageResourceAccess,
} = require('./API/CustomerMessage/resourceAccess/GroupCustomerMessageResourceAccess.js');

const {
  initDB: TemplateCustomerMessageResourceAccess,
} = require('./API/CustomerMessage/resourceAccess/TemplateCustomerMessageResourceAccess.js');

const {
  initDB: CustomerNotification,
} = require('./API/CustomerNotification/resourceAccess/CustomerMessageResourceAccess.js');

const {
  initDB: MessageCustomerResourceAccess,
} = require('./API/CustomerNotification/resourceAccess/MessageCustomerResourceAccess.js');

const { initDB: GameRecordsResourceAccess } = require('./API/GameRecord/resourceAccess/GameRecordsResourceAccess.js');

const { resetDailyGame } = require('./API/GameRecord/script/resetGameResult.js');

const { initDB: MembershipResourceAccess } = require('./API/Membership/resourceAccess/MembershipResourceAccess.js');

const { initDB: OTPMessageResourceAccess } = require('./API/OTPMessage/resourceAccess/OTPMessageResourceAccess.js');

const {
  initDB: PaymentBonusTransactionResourceAccess,
} = require('./API/PaymentBonusTransaction/resourceAccess/PaymentBonusTransactionResourceAccess.js');

const {
  initDB: PaymentDepositTransactionResourceAccess,
} = require('./API/PaymentDepositTransaction/resourceAccess/PaymentDepositTransactionResourceAccess.js');

const {
  initDB: PaymentMethodResourceAccess,
} = require('./API/PaymentMethod/resourceAccess/PaymentMethodResourceAccess.js');

const {
  initDB: PaymentWithdrawTransactionResourceAccess,
} = require('./API/PaymentWithdrawTransaction/resourceAccess/PaymentWithdrawTransactionResourceAccess.js');

const { initDB: PermissionResourceAccess } = require('./API/Permission/resourceAccess/PermissionResourceAccess.js');
const {
  initDB: SystemConfigurationsResourceAccess,
} = require('./API/SystemConfigurations/resourceAccess/SystemConfigurationsResourceAccess.js');

const {
  initDB: SystemAppChangedLogResourceAccess,
} = require('./API/SystemAppChangedLog/resourceAccess/SystemAppChangedLogResourceAccess.js');

const { initDB: StaffResourceAccess } = require('./API/Staff/resourceAccess/StaffResourceAccess.js');

const { initDB: RoleResourceAccess } = require('./API/Role/resourceAccess/RoleResourceAccess.js');
const { initDB: UploadResourceAccess } = require('./API/Upload/resourceAccess/UploadResourceAccess.js');

const { initDB: WalletResourceAccess } = require('./API/Wallet/resourceAccess/WalletResourceAccess.js');

const { InitWalletForAllUser } = require('./API/Wallet/script/InitWalletForAllUser.js');

const {
  initDB: WalletBalanceUnitResourceAccess,
} = require('./API/WalletBalanceUnit/resourceAccess/WalletBalanceUnitResourceAccess.js');

const { initDB: WalletRecordResoureAccess } = require('./API/WalletRecord/resourceAccess/WalletRecordResoureAccess.js');

const { initViews: AppUserMembershipView } = require('./API/AppUsers/resourceAccess/AppUserView.js');
const { initViews: RoleUserView } = require('./API/AppUsers/resourceAccess/RoleUserView.js');
const { initViews: WalletAppUserView } = require('./API/AppUsers/resourceAccess/WalletAppUserView.js');
const { initViews: UserBetRecordsView } = require('./API/BetRecords/resourceAccess/UserBetRecordsView.js');
const { initViews: MessageCustomerView } = require('./API/CustomerNotification/resourceAccess/MessageCustomerView.js');
const {
  initViews: PaymentBonusTransactionUserView,
} = require('./API/PaymentBonusTransaction/resourceAccess/PaymentBonusTransactionUserView.js');
const {
  initViews: SummaryUserPaymentBonusTransactionView,
} = require('./API/PaymentBonusTransaction/resourceAccess/SummaryUserPaymentBonusTransactionView.js');
const {
  initViews: PaymentDepositMethodView,
} = require('./API/PaymentDepositTransaction/resourceAccess/PaymentDepositMethodView.js');
const {
  initViews: PaymentDepositTransactionUserView,
} = require('./API/PaymentDepositTransaction/resourceAccess/PaymentDepositTransactionUserView.js');
const {
  initViews: SummaryUserPaymentDepositTransactionView,
} = require('./API/PaymentDepositTransaction/resourceAccess/SummaryUserPaymentDepositTransactionView.js');
const {
  initViews: SummaryUserWithdrawTransactionView,
} = require('./API/PaymentWithdrawTransaction/resourceAccess/SummaryUserWithdrawTransactionView.js');
const { initViews: RoleStaffView } = require('./API/Staff/resourceAccess/RoleStaffView.js');
const { initViews: WalletBalanceUnitView } = require('./API/Wallet/resourceAccess/WalletBalanceUnitView.js');
const {
  initViews: WalletRecordGameReferSummaryView,
} = require('./API/WalletRecord/resourceAccess/WalletRecordGameReferSummaryView.js');
const { initViews: WalletRecordView } = require('./API/WalletRecord/resourceAccess/WalletRecordView.js');

const startInit = async () => {
  try {
    await AppUsersResourceAccess();
    await InitWalletForAllUser();
    // await RoleResourceAccess();
    await GameRecordsResourceAccess();
    await WalletResourceAccess();
    await PermissionResourceAccess();
    await AppUserMembershipResourceAccess();
    await MembershipResourceAccess();
    await WalletBalanceUnitResourceAccess();
    await StaffResourceAccess();
    await SystemConfigurationsResourceAccess();
    await CustomerMessageResourceAccess();
    await GroupCustomerMessageResourceAccess();
    await TemplateCustomerMessageResourceAccess();
    await CustomerNotification();
    await MessageCustomerResourceAccess();
    await OTPMessageResourceAccess();
    await PaymentBonusTransactionResourceAccess();
    await PaymentDepositTransactionResourceAccess();
    await PaymentMethodResourceAccess();
    await PaymentWithdrawTransactionResourceAccess();
    await SystemAppChangedLogResourceAccess();
    await UploadResourceAccess();
    await WalletRecordResoureAccess();
    await BetRecordsResourceAccess();

    await resetDailyGame();
    await AppUserMembershipView();
    await WalletAppUserView();
    await UserBetRecordsView();
    await PaymentDepositTransactionUserView();
    await MessageCustomerView();
    await WalletRecordView();
    await PaymentBonusTransactionUserView();
    await SummaryUserPaymentBonusTransactionView();
    await PaymentDepositMethodView();
    await SummaryUserPaymentDepositTransactionView();
    await SummaryUserWithdrawTransactionView();
    await WalletBalanceUnitView();
    await WalletRecordGameReferSummaryView();
    await RoleUserView();
    await RoleStaffView();
  } catch (error) {
    console.log('error');
  }
};

startInit();

module.exports = startInit;

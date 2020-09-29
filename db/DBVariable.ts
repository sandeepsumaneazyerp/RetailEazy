export class DBVariable {
  public UserTable = new (class {
    KEY_ROWID = '_id';
    KEY_UserId = 'UserId';
    KEY_UserName = 'UserName';
    KEY_EmailId = 'EmailId';
    KEY_Password = 'Password';
    KEY_IsActive = 'IsActive';
    KEY_MobileNo = 'MobileNo';
    KEY_Address = 'Address';
    KEY_CityId = 'CityId';
    KEY_Pincode = 'Pincode';
    KEY_GSTNo = 'GSTNo';
    KEY_Latitude = 'Latitude';
    KEY_Longitude = 'Longitude';
    KEY_AlteredOn = 'AlteredOn';
    KEY_StateId = 'StateId';
    KEY_PANNO = 'PANNO';
    KEY_DrivingLicence = 'DrivingLicence';
    KEY_AadhaarNo = 'AadhaarNo';
    KEY_VoterId = 'VoterId';
    KEY_PaytmMobileNo = 'PaytmMobileNo';
    KEY_UPIID = 'UPIID';
    KEY_UserImageURL = 'UserImageURL';
    KEY_IsActiveBillCustomer = 'IsActiveBill';
    KEY_VoucherNo = 'VoucherNo';
    KEY_PoOrderNo = 'PoOrderNo';
    KEY_SoOrderNo = 'SoOrderNo';
    KEY_LoginId = 'LoginId';

    USER_TABLE = 'UserTable';

    USERTABLE_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.USER_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_UserId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_UserName +
      " TEXT DEFAULT '', " +
      this.KEY_EmailId +
      " TEXT DEFAULT '' , " +
      this.KEY_Password +
      " TEXT DEFAULT '', " +
      this.KEY_IsActive +
      ' BOOLEAN, ' +
      this.KEY_MobileNo +
      " TEXT DEFAULT '' , " +
      this.KEY_Address +
      " TEXT DEFAULT '', " +
      this.KEY_CityId +
      ' INT DEFAULT 0 , ' +
      this.KEY_Pincode +
      " TEXT DEFAULT '' , " +
      this.KEY_GSTNo +
      " TEXT DEFAULT '' , " +
      this.KEY_Latitude +
      " TEXT DEFAULT '' , " +
      this.KEY_Longitude +
      " TEXT DEFAULT '' , " +
      this.KEY_AlteredOn +
      ' DATETIME, ' +
      this.KEY_StateId +
      ' INT DEFAULT 0 , ' +
      this.KEY_PANNO +
      " TEXT DEFAULT '' , " +
      this.KEY_DrivingLicence +
      " TEXT DEFAULT '' , " +
      this.KEY_AadhaarNo +
      " TEXT DEFAULT '' , " +
      this.KEY_VoterId +
      " TEXT DEFAULT '' , " +
      this.KEY_PaytmMobileNo +
      " TEXT DEFAULT '' , " +
      this.KEY_UPIID +
      " TEXT DEFAULT '' , " +
      this.KEY_UserImageURL +
      " TEXT DEFAULT '' , " +
      this.KEY_IsActiveBillCustomer +
      ' BOOLEAN, ' +
      this.KEY_VoucherNo +
      " TEXT DEFAULT '' , " +
      this.KEY_PoOrderNo +
      " TEXT DEFAULT '' , " +
      this.KEY_SoOrderNo +
      " TEXT DEFAULT '' , " +
      this.KEY_LoginId +
      " TEXT DEFAULT '' NOT NULL,  unique (" +
      this.KEY_EmailId +
      '))';
  })();

  public BrandTable = new (class {
    KEY_ROWID = '_id';
    KEY_BrandId = 'BrandId';
    KEY_BrandName = 'BrandName';
    KEY_BrandCode = 'BrandCode';
    KEY_IsActive = 'IsActive';
    KEY_DesignationName = 'DesignationName';
    KEY_AlteredOn = 'AlteredOn';
    KEY_IsSerialEnable = 'IsSerialEnable';
    KEY_IsBatchEnable = 'IsBatchEnable';
    KEY_SubStringFrom = 'SubStringFrom';
    KEY_SubStringTo = 'SubStringTo';

    BRAND_TABLE = 'BrandTable';

    BRANDTABLE_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.BRAND_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_BrandId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_BrandName +
      " TEXT DEFAULT '' , " +
      this.KEY_BrandCode +
      " TEXT DEFAULT '' , " +
      this.KEY_IsActive +
      ' BOOLEAN DEFAULT 0, ' +
      this.KEY_DesignationName +
      " TEXT DEFAULT '' , " +
      this.KEY_AlteredOn +
      ' DATETIME, ' +
      this.KEY_IsSerialEnable +
      ' BOOLEAN DEFAULT 0, ' +
      this.KEY_IsBatchEnable +
      ' BOOLEAN DEFAULT 0, ' +
      this.KEY_SubStringFrom +
      ' INT DEFAULT 0 , ' +
      this.KEY_SubStringTo +
      ' INT DEFAULT 5 NOT NULL, unique (' +
      this.KEY_BrandId +
      '))';
  })();

  public DistributorMaster = new (class {
    KEY_ROWID = '_id';
    KEY_DistributorId = 'DistributorId';
    KEY_DistributorName = 'DistributorName';
    KEY_DistributorCode = 'DistributorCode';
    KEY_DistributorEmail = 'DistributorEmail';
    KEY_DistributorMobile = 'DistributorMobile';
    KEY_MappingId = 'MappingId';
    KEY_BrandId = 'BrandId';
    KEY_Address = 'Address';
    KEY_UPIId = 'UPIId';
    KEY_PaytmMobileNo = 'PaytmMobileNo';
    KEY_CityId = 'CityId';
    KEY_CityCode = 'CityCode';
    KEY_CityName = 'CityName';
    KEY_StateId = 'StateId';
    KEY_StateCode = 'StateCode';
    KEY_StateName = 'StateName';
    KEY_IsActive = 'IsActive';
    KEY_AlteredOn = 'AlteredOn';

    DISTRIBUTOR_TABLE = 'DistributorMaster';

    DISTRIBUTOR_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.DISTRIBUTOR_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_DistributorId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_DistributorName +
      " TEXT DEFAULT '' , " +
      this.KEY_DistributorCode +
      " TEXT DEFAULT '' , " +
      this.KEY_DistributorEmail +
      " TEXT DEFAULT '' , " +
      this.KEY_DistributorMobile +
      " TEXT DEFAULT '' , " +
      this.KEY_MappingId +
      ' INT DEFAULT 0 , ' +
      this.KEY_BrandId +
      ' INT DEFAULT 0 , ' +
      this.KEY_Address +
      " TEXT DEFAULT '' , " +
      this.KEY_UPIId +
      " TEXT DEFAULT '' , " +
      this.KEY_PaytmMobileNo +
      " TEXT DEFAULT '' , " +
      this.KEY_CityId +
      ' INT DEFAULT 0 , ' +
      this.KEY_CityCode +
      " TEXT DEFAULT '' , " +
      this.KEY_CityName +
      " TEXT DEFAULT '' , " +
      this.KEY_StateId +
      ' INT DEFAULT 0 , ' +
      this.KEY_StateCode +
      " TEXT DEFAULT '' , " +
      this.KEY_StateName +
      " TEXT DEFAULT '' , " +
      this.KEY_IsActive +
      ' BOOLEAN, ' +
      this.KEY_AlteredOn +
      ' DATETIME, unique (' +
      this.KEY_DistributorId +
      '))';
  })();

  public ItemsMaster = new (class {
    KEY_ROWID = '_id';
    KEY_ItemId = 'ItemId';
    KEY_ItemName = 'ItemName';
    KEY_ItemCode = 'ItemCode';
    KEY_UMO = 'UMO';
    KEY_UMOId = 'UMOId';
    KEY_AltUOM = 'AltUOM';
    KEY_AltUOMId = 'AltUOMId';
    KEY_NoOfDecimalPlaces = 'NoOfDecimalPlaces';
    KEY_Conversion = 'Conversion';
    KEY_Denominator = 'Denominator';
    KEY_ItemRates = 'ItemRates';
    KEY_GroupId = 'GroupId';
    KEY_BrandId = 'BrandId';
    KEY_DivisionId = 'DivisionId';
    KEY_IsActive = 'IsActive';
    KEY_MRP = 'MRP';
    KEY_PTR = 'PTR';
    KEY_IsBatchEnable = 'IsBatchEnable';
    KEY_IsSerialEnable = 'IsSerialEnable';
    KEY_PrimaryCategoryId = 'PrimaryCategoryId';
    KEY_SecondaryCategoryId = 'SecondaryCategoryId';
    KEY_AlteredOn = 'AlteredOn';

    ITEMS_TABLE = 'ItemsMaster';

    ITEM_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.ITEMS_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_ItemId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_ItemName +
      ' TEXT , ' +
      this.KEY_ItemCode +
      " TEXT DEFAULT '', " +
      this.KEY_UMO +
      " TEXT DEFAULT '', " +
      this.KEY_UMOId +
      ' INT DEFAULT 0, ' +
      this.KEY_AltUOM +
      " TEXT DEFAULT '', " +
      this.KEY_AltUOMId +
      ' INT DEFAULT 0, ' +
      this.KEY_NoOfDecimalPlaces +
      ' INT DEFAULT 0, ' +
      this.KEY_Conversion +
      ' DECIMAL, ' +
      this.KEY_Denominator +
      ' DECIMAL, ' +
      this.KEY_ItemRates +
      ' REAL DEFAULT 0, ' +
      this.KEY_GroupId +
      ' INT DEFAULT 0, ' +
      this.KEY_BrandId +
      ' INT DEFAULT 0, ' +
      this.KEY_DivisionId +
      ' INT DEFAULT 0, ' +
      this.KEY_IsActive +
      ' BOOLEAN, ' +
      this.KEY_MRP +
      ' REAL DEFAULT 0, ' +
      this.KEY_PTR +
      ' REAL DEFAULT 0, ' +
      this.KEY_IsBatchEnable +
      ' BOOLEAN DEFAULT 0, ' +
      this.KEY_IsSerialEnable +
      ' BOOLEAN DEFAULT 0, ' +
      this.KEY_PrimaryCategoryId +
      ' INT DEFAULT 0, ' +
      this.KEY_SecondaryCategoryId +
      ' INT DEFAULT 0, ' +
      this.KEY_AlteredOn +
      ' DATETIME, unique (' +
      this.KEY_ItemId +
      '))';
  })();

  public UnitMaster = new (class {
    KEY_ROWID = '_id';
    KEY_UnitId = 'UnitId';
    KEY_UnitName = 'UnitName';
    KEY_UnitSymbol = 'UnitSymbol';
    KEY_BrandId = 'BrandId';
    KEY_IsActive = 'IsActive';
    KEY_AlteredOn = 'AlteredOn';

    UNITMASTER_MASTER = 'UnitMaster';

    UNITMASTER_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.UNITMASTER_MASTER +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_UnitId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_UnitName +
      " TEXT DEFAULT '' , " +
      this.KEY_UnitSymbol +
      " TEXT DEFAULT '' , " +
      this.KEY_BrandId +
      ' INT DEFAULT 0 , ' +
      this.KEY_IsActive +
      ' BOOLEAN, ' +
      this.KEY_AlteredOn +
      ' DATETIME, unique (' +
      this.KEY_UnitId +
      '))';
  })();

  public ItemGroupMaster = new (class {
    KEY_ROWID = '_id';
    KEY_ItemGroupId = 'ItemGroupId';
    KEY_GroupCode = 'GroupCode';
    KEY_GroupName = 'GroupName';
    KEY_ParentGroupId = 'ParentGroupId';
    KEY_BrandId = 'BrandId';
    KEY_IsActive = 'IsActive';
    KEY_AlteredOn = 'AlteredOn';

    ITEM_GROUP_TABLE = 'ItemGroupMaster';

    ITEMGROUP_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.ITEM_GROUP_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_ItemGroupId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_GroupCode +
      " TEXT DEFAULT '', " +
      this.KEY_GroupName +
      " TEXT DEFAULT '', " +
      this.KEY_ParentGroupId +
      ' INT DEFAULT 0, ' +
      this.KEY_BrandId +
      ' INT DEFAULT 0, ' +
      this.KEY_IsActive +
      ' BOOLEAN, ' +
      this.KEY_AlteredOn +
      ' DATETIME, unique (' +
      this.KEY_ItemGroupId +
      '))';
  })();

  public CityMaster = new (class {
    KEY_ROWID = '_id';
    KEY_CityId = 'CityId';
    KEY_CityCode = 'CityCode';
    KEY_CityName = 'CityName';
    KEY_StateId = 'StateId';
    KEY_IsActive = 'IsActive';
    KEY_BrandId = 'BrandId';
    KEY_AlteredOn = 'AlteredOn';

    CITYMASTERTABLE = 'CityMaster';

    CITYMASTER_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.CITYMASTERTABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_CityId +
      ' INT, ' +
      this.KEY_CityCode +
      " TEXT DEFAULT '' , " +
      this.KEY_CityName +
      " TEXT DEFAULT '' , " +
      this.KEY_IsActive +
      ' BOOLEAN, ' +
      this.KEY_BrandId +
      ' INT, ' +
      this.KEY_StateId +
      ' INT, ' +
      this.KEY_AlteredOn +
      ' DATETIME, unique (' +
      this.KEY_CityId +
      '))';
  })();

  public StateMaster = new (class {
    KEY_ROWID = '_id';
    KEY_StateId = 'StateId';
    KEY_StateCode = 'StateCode';
    KEY_StateName = 'StateName';
    KEY_CountryId = 'CountryId';
    KEY_CountryCode = 'CountryCode';
    KEY_CountryName = 'CountryName';
    KEY_IsActive = 'IsActive';
    KEY_BrandId = 'BrandId';
    KEY_AlteredOn = 'AlteredOn';

    STATEMASTERTABLE = 'StateMaster';

    STATEMASTER_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.STATEMASTERTABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_StateId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_StateCode +
      " TEXT DEFAULT '' , " +
      this.KEY_StateName +
      " TEXT DEFAULT '' , " +
      this.KEY_CountryId +
      ' INT, ' +
      this.KEY_CountryCode +
      " TEXT DEFAULT '' , " +
      this.KEY_CountryName +
      " TEXT DEFAULT '' , " +
      this.KEY_IsActive +
      ' BOOLEAN, ' +
      this.KEY_BrandId +
      ' INT DEFAULT 0 , ' +
      this.KEY_AlteredOn +
      ' DATETIME, unique (' +
      this.KEY_StateId +
      '))';
  })();

  public OrderTable = new (class {
    KEY_ROWID = '_id';
    KEY_UserId = 'UserId';
    KEY_OrderId = 'OrderId';
    KEY_DistributorId = 'DistributorId';
    KEY_DistributorCode = 'DistributorCode';
    KEY_OrderDate = 'OrderDate';
    KEY_AppOrderNo = 'AppOrderNo';
    KEY_WebOrderNo = 'WebOrderNo';
    KEY_CreatedOn = 'CreatedOn';
    KEY_NetTotal = 'NetTotal';
    KEY_BrandId = 'BrandId';
    KEY_CancelStatus = 'CancelStatus';
    KEY_CancelDate = 'CancelDate';
    KEY_CancelRemark = 'CancelRemark';
    KEY_ApprovedStatus = 'ApprovedStatus';
    KEY_ApprovedDate = 'ApprovedDate';
    KEY_ApprovedRemark = 'ApprovedRemark';
    KEY_AlteredOn = 'AlteredOn';
    KEY_IsSync = 'IsSync';
    KEY_AddedInCart = 'AddedInCart';
    KEY_UserRemark = 'UserRemark';
    KEY_ApproveRejectStatus = 'ApproveRejectStatus';
    KEY_Latitude = 'Latitude';
    KEY_Longitude = 'Longitude';

    ORDER_TABLE = 'OrderTable';

    ORDER_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.ORDER_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_UserId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_OrderId +
      ' INT DEFAULT 0 , ' +
      this.KEY_DistributorId +
      ' INT DEFAULT 0 , ' +
      this.KEY_DistributorCode +
      " TEXT DEFAULT '' , " +
      this.KEY_OrderDate +
      ' DATE, ' +
      this.KEY_AppOrderNo +
      " TEXT DEFAULT '' , " +
      this.KEY_WebOrderNo +
      " TEXT DEFAULT '' , " +
      this.KEY_CreatedOn +
      ' DATETIME, ' +
      this.KEY_NetTotal +
      ' DECIMAL, ' +
      this.KEY_BrandId +
      ' INT DEFAULT 0 , ' +
      this.KEY_CancelStatus +
      ' BOOLEAN DEFAULT 0, ' +
      this.KEY_CancelDate +
      ' DATETIME, ' +
      this.KEY_CancelRemark +
      " TEXT DEFAULT '' , " +
      this.KEY_ApprovedStatus +
      ' BOOLEAN DEFAULT 0, ' +
      this.KEY_ApprovedDate +
      ' DATETIME, ' +
      this.KEY_ApprovedRemark +
      " TEXT DEFAULT '' , " +
      this.KEY_AlteredOn +
      ' DATETIME, ' +
      this.KEY_IsSync +
      ' BOOLEAN, ' +
      this.KEY_AddedInCart +
      ' BOOLEAN, ' +
      this.KEY_Latitude +
      " TEXT DEFAULT '' , " +
      this.KEY_Longitude +
      " TEXT DEFAULT '' , " +
      this.KEY_UserRemark +
      " TEXT DEFAULT '' , " +
      this.KEY_ApproveRejectStatus +
      ' INT DEFAULT 0 NOT NULL, unique (' +
      this.KEY_ROWID +
      '))';
  })();

  public OrderDetailsTable = new (class {
    KEY_ROWID = '_id';
    KEY_OrderId = 'OrderId';
    KEY_ItemId = 'ItemId';
    KEY_ItemCode = 'ItemCode';
    KEY_Qty = 'Qty';
    KEY_Rate = 'Rate';
    KEY_UnitId = 'UnitId';
    KEY_Conversion = 'Conversion';
    KEY_PendingQty = 'PendingQty';

    ORDERDETAILS_TABLE = 'OrderDetails';

    ORDERDETAILS_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.ORDERDETAILS_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_OrderId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_ItemId +
      ' INT DEFAULT 0 , ' +
      this.KEY_ItemCode +
      " TEXT DEFAULT '' , " +
      this.KEY_UnitId +
      ' INT DEFAULT 0 , ' +
      this.KEY_Qty +
      ' DECIMAL, ' +
      this.KEY_Rate +
      ' DECIMAL, ' +
      this.KEY_Conversion +
      ' DECIMAL, ' +
      this.KEY_PendingQty +
      ' DECIMAL, unique (' +
      this.KEY_ROWID +
      '))';
  })();

  public DivisionTable = new (class {
    KEY_ROWID = '_id';
    KEY_DivisionId = 'DivisionId';
    KEY_BrandId = 'BrandId';
    KEY_DivisionCode = 'DivisionCode';
    KEY_DivisionName = 'DivisionName';
    KEY_IsActive = 'IsActive';
    KEY_AlteredOn = 'AlteredOn';

    DIVISION_TABLE = 'DivisionTable';

    DIVISION_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.DIVISION_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_DivisionId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_BrandId +
      ' INT DEFAULT 0 , ' +
      this.KEY_DivisionCode +
      " TEXT DEFAULT '' , " +
      this.KEY_DivisionName +
      " TEXT DEFAULT '' , " +
      this.KEY_IsActive +
      ' BOOLEAN, ' +
      this.KEY_AlteredOn +
      ' DATETIME, unique (' +
      this.KEY_ROWID +
      '))';
  })();

  public DivisionMappingTable = new (class {
    KEY_ROWID = '_id';
    KEY_UserDivisionMappingId = 'UserDivisionMappingId';
    KEY_SellerUserId = 'SellerUserId';
    KEY_DivisionId = 'DivisionId';
    KEY_BrandId = 'BrandId';
    KEY_DistributorName = 'DistributorName';
    KEY_EmailId = 'EmailId';
    KEY_MobileNo = 'MobileNo';
    KEY_IsActive = 'IsActive';
    KEY_AlteredOn = 'AlteredOn';

    DIVISIONMAP_TABLE = 'DivisionMapTable';

    DIVISIONMAP_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.DIVISIONMAP_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_UserDivisionMappingId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_SellerUserId +
      ' INT DEFAULT 0 , ' +
      this.KEY_DivisionId +
      ' INT DEFAULT 0 , ' +
      this.KEY_BrandId +
      ' INT DEFAULT 0 , ' +
      this.KEY_DistributorName +
      " TEXT DEFAULT '' , " +
      this.KEY_EmailId +
      " TEXT DEFAULT '' , " +
      this.KEY_MobileNo +
      " TEXT DEFAULT '' , " +
      this.KEY_IsActive +
      ' BOOLEAN, ' +
      this.KEY_AlteredOn +
      ' DATETIME, unique (' +
      this.KEY_UserDivisionMappingId +
      '))';
  })();

  public DistributorDivisionTable = new (class {
    KEY_ROWID = '_id';
    KEY_TaggingId = 'TaggingId';
    KEY_UserId = 'UserId';
    KEY_DivisionId = 'DivisionId';
    KEY_BrandId = 'BrandId';
    KEY_IsActive = 'IsActive';
    KEY_AlteredOn = 'AlteredOn';

    DIST_DIVISION_TABLE = 'DistributorDivisionTable';

    DIST_DIVISION_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS'" +
      this.DIST_DIVISION_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_TaggingId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_UserId +
      ' INT DEFAULT 0 , ' +
      this.KEY_DivisionId +
      ' INT DEFAULT 0 , ' +
      this.KEY_BrandId +
      ' INT DEFAULT 0 , ' +
      this.KEY_IsActive +
      ' BOOLEAN, ' +
      this.KEY_AlteredOn +
      ' DATETIME, unique (' +
      this.KEY_TaggingId +
      '))';
  })();

  public ReceivedOrderTable = new (class {
    KEY_ROWID = '_id';
    KEY_UserId = 'UserId';
    KEY_OrderId = 'OrderId';
    KEY_DistributorId = 'DistributorId';
    KEY_DistributorCode = 'DistributorCode';
    KEY_CustomerId = 'CustomerId';
    KEY_CustomerName = 'CustomerName';
    KEY_SalesPersonId = 'SalesPersonId';
    KEY_SalesPersonName = 'SalesPersonName';
    KEY_SalesPersonCode = 'SalesPersonCode';
    KEY_OrderDate = 'OrderDate';
    KEY_AppOrderNo = 'AppOrderNo';
    KEY_WebOrderNo = 'WebOrderNo';
    KEY_CreatedOn = 'CreatedOn';
    KEY_NetTotal = 'NetTotal';
    KEY_UserRemark = 'UserRemark';
    KEY_BrandId = 'BrandId';
    KEY_CancelStatus = 'CancelStatus';
    KEY_CancelDate = 'CancelDate';
    KEY_CancelRemark = 'CancelRemark';
    KEY_ApprovedStatus = 'ApprovedStatus';
    KEY_ApprovedDate = 'ApprovedDate';
    KEY_ApprovedRemark = 'ApprovedRemark';
    KEY_ApproveRejectStatus = 'ApproveRejectStatus';
    KEY_AlteredOn = 'AlteredOn';
    KEY_Latitude = 'Latitude';
    KEY_Longitude = 'Longitude';

    RECEIVED_ORDER_TABLE = 'ReceivedOrderTable';

    RECEIVED_ORDER_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.RECEIVED_ORDER_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_UserId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_OrderId +
      ' INT DEFAULT 0 , ' +
      this.KEY_DistributorId +
      ' INT DEFAULT 0 , ' +
      this.KEY_CustomerId +
      ' INT DEFAULT 0 , ' +
      this.KEY_CustomerName +
      " TEXT DEFAULT '' , " +
      this.KEY_DistributorCode +
      " TEXT DEFAULT '' , " +
      this.KEY_SalesPersonId +
      ' INT DEFAULT 0 , ' +
      this.KEY_SalesPersonName +
      " TEXT DEFAULT '' , " +
      this.KEY_SalesPersonCode +
      " TEXT DEFAULT '' , " +
      this.KEY_OrderDate +
      ' DATE, ' +
      this.KEY_AppOrderNo +
      " TEXT DEFAULT '' , " +
      this.KEY_WebOrderNo +
      " TEXT DEFAULT '' , " +
      this.KEY_CreatedOn +
      ' DATETIME, ' +
      this.KEY_NetTotal +
      ' DECIMAL, ' +
      this.KEY_UserRemark +
      " TEXT DEFAULT '' , " +
      this.KEY_BrandId +
      ' INT DEFAULT 0 , ' +
      this.KEY_CancelStatus +
      ' BOOLEAN DEFAULT 0, ' +
      this.KEY_CancelDate +
      ' DATETIME, ' +
      this.KEY_CancelRemark +
      " TEXT DEFAULT '' , " +
      this.KEY_ApprovedStatus +
      ' BOOLEAN DEFAULT 0, ' +
      this.KEY_ApprovedDate +
      ' DATETIME, ' +
      this.KEY_ApprovedRemark +
      " TEXT DEFAULT '' , " +
      this.KEY_Latitude +
      " TEXT DEFAULT '' , " +
      this.KEY_Longitude +
      " TEXT DEFAULT '' , " +
      this.KEY_AlteredOn +
      ' DATETIME, ' +
      this.KEY_ApproveRejectStatus +
      ' INT DEFAULT 0 NOT NULL, unique (' +
      this.KEY_ROWID +
      '))';
  })();

  public ReceivedOrderDetailsTable = new (class {
    KEY_ROWID = '_id';
    KEY_OrderId = 'OrderId';
    KEY_ItemId = 'ItemId';
    KEY_ItemCode = 'ItemCode';
    KEY_Qty = 'Qty';
    KEY_Rate = 'Rate';
    KEY_UnitId = 'UnitId';
    KEY_TotalAmount = 'TotalAmount';
    KEY_DeliveredQty = 'DeliveredQty';
    KEY_Conversion = 'Conversion';
    KEY_PendingQty = 'PendingQty';

    RECEIVED_ORDER_DETAILS_TABLE = 'ReceivedOrderDetail';

    RECEIVED_ORDER_DETAILS_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.RECEIVED_ORDER_DETAILS_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_OrderId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_ItemId +
      ' INT DEFAULT 0 , ' +
      this.KEY_ItemCode +
      " TEXT DEFAULT '' , " +
      this.KEY_UnitId +
      ' INT DEFAULT 0 , ' +
      this.KEY_Qty +
      ' DECIMAL, ' +
      this.KEY_Rate +
      ' DECIMAL, ' +
      this.KEY_TotalAmount +
      ' DECIMAL, ' +
      this.KEY_DeliveredQty +
      ' DECIMAL, ' +
      this.KEY_Conversion +
      ' DECIMAL, ' +
      this.KEY_PendingQty +
      ' DECIMAL, unique (' +
      this.KEY_ROWID +
      '))';
  })();

  public AvailableStockMaster = new (class {
    KEY_ROWID = '_id';
    KEY_Id = 'Id';
    KEY_DistDealId = 'DistDealId';
    KEY_IsDistributor = 'IsDistributor';
    KEY_BrandId = 'BrandId';
    KEY_CreatedOn = 'CreatedOn';
    KEY_CreatedBy = 'CreatedBy';
    KEY_SyncDate = 'SyncDate';
    KEY_IsSync = 'IsSync';
    KEY_TempAdded = 'TempAdded';

    AVAILABLESTOCK_TABLE = 'AvailableStockMaster';

    AVAILABLESTOCK_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.AVAILABLESTOCK_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_Id +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_DistDealId +
      ' INT, ' +
      this.KEY_IsDistributor +
      ' BOOLEAN,' +
      this.KEY_BrandId +
      ' INT,' +
      this.KEY_CreatedOn +
      ' DATETIME,' +
      this.KEY_CreatedBy +
      ' INT DEFAULT 0 , ' +
      this.KEY_SyncDate +
      ' DATETIME, ' +
      this.KEY_IsSync +
      ' BOOLEAN, ' +
      this.KEY_TempAdded +
      ' BOOLEAN, unique (' +
      this.KEY_DistDealId +
      ',' +
      this.KEY_CreatedOn +
      '))';
  })();

  public AvailableStockItemDetails = new (class {
    KEY_ROWID = '_id';
    KEY_DetailId = 'DetailId';
    KEY_MasterId = 'MasterId';
    KEY_ItemId = 'ItemId';
    KEY_BaseUnit = 'BaseUnit';
    KEY_AltUnit = 'AltUnit';
    KEY_ItemAvailable = 'ItemAvailable';
    KEY_SelectedUnitId = 'SelectedUnitId';
    KEY_AlteredOn = 'AlteredOn';

    AVAILABLESTOCKDETAIL_TABLE = 'AvailableStockItemDetails';

    AVAILABLESTOCKDETAIL_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.AVAILABLESTOCKDETAIL_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_DetailId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_MasterId +
      ' INT DEFAULT 0 , ' +
      this.KEY_ItemId +
      ' INT DEFAULT 0 , ' +
      this.KEY_BaseUnit +
      " TEXT DEFAULT '' ," +
      this.KEY_AltUnit +
      " TEXT DEFAULT '' ," +
      this.KEY_ItemAvailable +
      ' INT DEFAULT 0 ,' +
      this.KEY_AlteredOn +
      ' DATETIME,' +
      this.KEY_SelectedUnitId +
      ' INT DEFAULT 0 NOT NULL)';
  })();

  public LogTable = new (class {
    KEY_ROWID = '_id';
    KEY_MasterSyncDate = 'MasterSyncDate';
    KEY_OrderSyncDate = 'OrderSyncDate';
    KEY_AvailableStockSyncDate = 'AvailableStockSyncDate';
    KEY_BillingSyncDate = 'Billing';
    KEY_CustomerSyncDate = 'Customer';

    LOG_TABLE = 'LogTable';

    LOG_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.LOG_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_MasterSyncDate +
      ' DATETIME, ' +
      this.KEY_OrderSyncDate +
      ' DATETIME, ' +
      this.KEY_AvailableStockSyncDate +
      ' DATETIME, ' +
      this.KEY_BillingSyncDate +
      ' DATETIME, ' +
      this.KEY_CustomerSyncDate +
      ' DATETIME )';
  })();

  public DealerMaster = new (class {
    KEY_ROWID = '_id';
    KEY_DealerId = 'DealerId';
    KEY_DealerName = 'DealerName';
    KEY_DealerCode = 'DealerCode';
    KEY_IsActive = 'IsActive';
    KEY_Address = 'Address';
    KEY_CityId = 'CityId';
    KEY_CityName = 'CityName';
    KEY_CityCode = 'CityCode';
    KEY_StateId = 'StateId';
    KEY_StateName = 'StateName';
    KEY_StateCode = 'StateCode';
    KEY_Pincode = 'Pincode';
    KEY_ContactNo = 'ContactNo';
    KEY_EmailId = 'EmailId';
    KEY_UPIId = 'UPIId';
    KEY_PaytmMobileNo = 'PaytmMobileNo';
    KEY_PanNo = 'PanNo';
    KEY_GSTINNo = 'GSTINNo';
    KEY_BrandId = 'BrandId';
    KEY_MappingId = 'MappingId';
    KEY_MarginBrandId = 'MarginBrandId'; //Key Created For Future use
    KEY_DesignationId = 'DesignationId';
    KEY_RateMargin = 'RateMargin';
    KEY_AlteredOn = 'AlteredOn';
    KEY_IsSync = 'IsSync';

    DEALER_TABLE = 'DealerMaster';

    DEALER_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.DEALER_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_DealerId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_DealerName +
      " TEXT DEFAULT '' ," +
      this.KEY_DealerCode +
      " TEXT DEFAULT '' , " +
      this.KEY_IsActive +
      ' BOOLEAN, ' +
      this.KEY_Address +
      " TEXT DEFAULT '' , " +
      this.KEY_CityId +
      ' INT DEFAULT 0 , ' +
      this.KEY_CityName +
      " TEXT DEFAULT '' ,  " +
      this.KEY_CityCode +
      " TEXT DEFAULT '' , " +
      this.KEY_StateId +
      ' INT DEFAULT 0 , ' +
      this.KEY_StateName +
      " TEXT DEFAULT '' , " +
      this.KEY_StateCode +
      " TEXT DEFAULT '' , " +
      this.KEY_Pincode +
      " TEXT DEFAULT '' , " +
      this.KEY_ContactNo +
      " TEXT DEFAULT '' , " +
      this.KEY_EmailId +
      " TEXT DEFAULT '' ,  " +
      this.KEY_UPIId +
      " TEXT DEFAULT '' , " +
      this.KEY_PaytmMobileNo +
      " TEXT DEFAULT '' , " +
      this.KEY_PanNo +
      " TEXT DEFAULT '' , " +
      this.KEY_GSTINNo +
      " TEXT DEFAULT '' , " +
      this.KEY_BrandId +
      ' INT DEFAULT 0 , ' +
      this.KEY_MappingId +
      ' INT DEFAULT 0 , ' +
      this.KEY_MarginBrandId +
      ' INT DEFAULT 0 , ' +
      this.KEY_DesignationId +
      ' INT DEFAULT 0 , ' +
      this.KEY_RateMargin +
      ' REAL, ' +
      this.KEY_AlteredOn +
      " TEXT DEFAULT '' , " +
      this.KEY_IsSync +
      ' Boolean,  unique (' +
      this.KEY_DealerId +
      '))';
  })();

  public MarginBrandTable = new (class {
    KEY_ROWID = '_id';
    KEY_MarginBrandId = 'MarginBrandId';
    KEY_DealerId = 'DealerId';
    KEY_BrandId = 'BrandId';
    KEY_DesignationId = 'DesignationId';
    KEY_RateMargin = 'RateMargin';

    MARGINBRAND_TABLE = 'MarginBrandTable';

    MARGINBRAND_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.MARGINBRAND_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_MarginBrandId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_DealerId +
      ' INT DEFAULT 0 , ' +
      this.KEY_BrandId +
      ' INT DEFAULT 0 , ' +
      this.KEY_DesignationId +
      ' INT DEFAULT 0 , ' +
      this.KEY_RateMargin +
      ' REAL, unique (' +
      this.KEY_ROWID +
      '))';
  })();

  public DesignationTable = new (class {
    KEY_ROWID = '_id';
    KEY_DesignationId = 'DesignationId';
    KEY_DesignationCode = 'DesignationCode';
    KEY_DesignationName = 'DesignationName';
    KEY_IsActive = 'IsActive';
    KEY_AlteredOn = 'AlteredOn';

    DESIGNATION_TABLE = 'DesignationTable';

    DESIGNATION_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.DESIGNATION_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_DesignationId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_DesignationCode +
      " TEXT DEFAULT '' , " +
      this.KEY_DesignationName +
      " TEXT DEFAULT '' , " +
      this.KEY_IsActive +
      ' BOOLEAN, ' +
      this.KEY_AlteredOn +
      ' DATETIME, unique (' +
      this.KEY_DesignationId +
      '))';
  })();

  public BillingTable = new (class {
    KEY_ROWID = '_id';
    KEY_UserId = 'UserId';
    KEY_VoucherId = 'VoucherId';
    KEY_DistributorId = 'DistributorId';
    KEY_DealerId = 'DealerId';
    KEY_BrandId = 'BrandId';
    KEY_VoucherDate = 'VoucherDate';
    KEY_VoucherNo = 'VoucherNo';
    KEY_NetTotal = 'NetTotal';
    KEY_IsSync = 'IsSync';
    KEY_AddedInCart = 'AddedInCart';
    KEY_OrderId = 'OrderId';
    KEY_BillingType = 'BillingType';
    KEY_Remark = 'UserRemark';
    KEY_AlteredOn = 'AlteredOn';

    BILLING_TABLE = 'BillingTable';

    BILLING_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.BILLING_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_UserId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_VoucherId +
      ' INT DEFAULT 0 , ' +
      this.KEY_DistributorId +
      ' INT DEFAULT 0 , ' +
      this.KEY_DealerId +
      ' INT DEFAULT 0 , ' +
      this.KEY_BrandId +
      ' INT DEFAULT 0 , ' +
      this.KEY_VoucherDate +
      ' DATETIME, ' +
      this.KEY_VoucherNo +
      " TEXT DEFAULT '' , " +
      this.KEY_NetTotal +
      ' DECIMAL, ' +
      this.KEY_IsSync +
      ' BOOLEAN, ' +
      this.KEY_AddedInCart +
      ' BOOLEAN, ' +
      this.KEY_OrderId +
      ' INT DEFAULT 0 , ' +
      this.KEY_BillingType +
      " TEXT DEFAULT '' , " +
      this.KEY_Remark +
      " TEXT DEFAULT '' , " +
      this.KEY_AlteredOn +
      " TEXT DEFAULT '' NOT NULL, unique (" +
      this.KEY_ROWID +
      '))';
  })();

  public BillingDetailsTable = new (class {
    KEY_ROWID = '_id';
    KEY_VoucherId = 'VoucherId';
    KEY_ItemId = 'ItemId';
    KEY_ItemCode = 'ItemCode';
    KEY_Qty = 'Qty';
    KEY_Rate = 'Rate';
    KEY_UnitId = 'UnitId';
    KEY_Conversion = 'Conversion';

    BILLING_DETAILS_TABLE = 'BillingDetailsTable';

    BILLING_DETAILS_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.BILLING_DETAILS_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_VoucherId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_ItemId +
      ' INT DEFAULT 0 , ' +
      this.KEY_ItemCode +
      " TEXT DEFAULT '' , " +
      this.KEY_UnitId +
      ' INT DEFAULT 0 , ' +
      this.KEY_Qty +
      ' REAL DEFAULT 0 , ' +
      this.KEY_Rate +
      ' REAL DEFAULT 0 , ' +
      this.KEY_Conversion +
      ' REAL DEFAULT 0 NOT NULL, unique (' +
      this.KEY_ROWID +
      '))';
  })();

  public ItemScanDetails = new (class {
    KEY_ROWID = '_id';
    KEY_VoucherId = 'VoucherId';
    KEY_ItemId = 'ItemId';
    KEY_ItemCode = 'ItemCode';
    KEY_SerialNo = 'SerialNo';
    KEY_BatchCode = 'BatchCode';

    ITEMSCAN_DETAILS_TABLE = 'ItemScanDetailsTable';

    ITEMSCAN_DETAILS_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.ITEMSCAN_DETAILS_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_VoucherId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_ItemId +
      ' INT DEFAULT 0 , ' +
      this.KEY_ItemCode +
      " TEXT DEFAULT '' , " +
      this.KEY_SerialNo +
      " TEXT DEFAULT '' , " +
      this.KEY_BatchCode +
      " TEXT DEFAULT '' NOT NULL, unique (" +
      this.KEY_ROWID +
      '))';
  })();


  public PrimaryCategory = new (class {
    KEY_ROWID = '_id';
    KEY_PrimaryCategoryId = 'PrimaryCategoryId';
    KEY_BrandId = 'BrandId';
    KEY_AttributeCode = 'AttributeCode';
    KEY_AttributeValue = 'AttributeValue';
    KEY_AlteredOn = 'AlteredOn';

    PRIMARY_CATEGORY_TABLE = 'PrimaryCategoryTable';

    PRIMARY_CATEGORY_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.PRIMARY_CATEGORY_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_PrimaryCategoryId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_BrandId +
      ' INT DEFAULT 0 , ' +
      this.KEY_AttributeCode +
      " TEXT DEFAULT '' , " +
      this.KEY_AttributeValue +
      " TEXT DEFAULT '' , " +
      this.KEY_AlteredOn +
      " DATETIME, unique (" +
      this.KEY_ROWID +
      '))';
  })();




  public SecondaryCategory = new (class {
    KEY_ROWID = '_id';
    KEY_SecondaryCategoryId = 'SecondaryCategoryId';
    KEY_BrandId = 'BrandId';
    KEY_AttributeCode = 'AttributeCode';
    KEY_AttributeValue = 'AttributeValue';
    KEY_AlteredOn = 'AlteredOn';

    SECONDARY_CATEGORY_TABLE = 'SecondaryCategoryTable';

    SECONDARY_CATEGORY_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.SECONDARY_CATEGORY_TABLE +
      "' (" +
      this.KEY_ROWID +
      ' INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      this.KEY_SecondaryCategoryId +
      ' INT DEFAULT 0 NOT NULL, ' +
      this.KEY_BrandId +
      ' INT DEFAULT 0 , ' +
      this.KEY_AttributeCode +
      " TEXT DEFAULT '' , " +
      this.KEY_AttributeValue +
      " TEXT DEFAULT '' , " +
      this.KEY_AlteredOn +
      " DATETIME, unique (" +
      this.KEY_ROWID +
      '))';
  })();




  public PurchaseInvoiceTable = new (class {
    KEY_ROWID = '_id';
    KEY_BillingMasterId = 'BillingMasterId';
    KEY_AppOrderNo = 'AppOrderNo';
    KEY_OrderDate = 'OrderDate';
    KEY_OrderId = 'OrderId';
    KEY_DistributorId = 'DistributorId';
    KEY_NetTotal = 'NetTotal';
    KEY_CreatedOn = 'CreatedOn';
    KEY_UserId = 'UserId'
    KEY_CustomerId = 'CustomerId'
    KEY_Remark = 'Remark';
    KEY_AlteredOn = 'AlteredOn';
    KEY_BillFromName = 'BillFromName';
    KEY_BrandId = 'BrandId';
    KEY_BillToName = 'BillToName'
    KEY_PartyBillNo = 'PartyBillNo';
    KEY_PartyBillDate = 'PartyBillDate';
    KEY_DistributorCode = 'DistributorCode';

    PURCHASE_INVOICE_TABLE = 'PurchaseInvoiceTable';

    PURCHASE_INVOICE_TABLE_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.PURCHASE_INVOICE_TABLE +
      "' (" +
      this.KEY_ROWID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
      this.KEY_BillingMasterId + " INT DEFAULT 0 NOT NULL, " +
      this.KEY_AppOrderNo + " TEXT DEFAULT '' NOT NULL, " +
      this.KEY_OrderDate + " DATE, " +
      this.KEY_OrderId + " INT DEFAULT 0 NOT NULL, " +
      this.KEY_DistributorId + " INT DEFAULT 0 NOT NULL, " +
      this.KEY_NetTotal + " DECIMAL, " +
      this.KEY_CreatedOn + " DATETIME DEFAULT '' NOT NULL, " +
      this.KEY_UserId + " INT DEFAULT 0 NOT NULL, " +
      this.KEY_CustomerId + " INT DEFAULT 0 NOT NULL, " +
      this.KEY_Remark + " TEXT DEFAULT '' NOT NULL, " +
      this.KEY_AlteredOn + " DATETIME, " +
      this.KEY_BillFromName + " TEXT DEFAULT '' NOT NULL, " +
      this.KEY_BrandId + " INT DEFAULT 0 NOT NULL, " +
      this.KEY_BillToName + " TEXT DEFAULT '' NOT NULL, " +
      this.KEY_PartyBillNo + " TEXT DEFAULT '' NOT NULL, " +
      this.KEY_PartyBillDate + " DATETIME DEFAULT '' NOT NULL, " +
      this.KEY_DistributorCode + " TEXT DEFAULT '' NOT NULL,unique (" + this.KEY_ROWID + "))"

  })();


  public PurchaseInvoiceItemsTable = new (class {
    KEY_ROWID = '_id';
    KEY_BillingMasterId = 'BillingMasterId';
    KEY_ItemId = 'ItemId';
    KEY_ItemCode = 'ItemCode';
    KEY_Qty = 'Qty';
    KEY_Rate = 'Rate';
    KEY_Amount = 'Amount';
    KEY_UnitId = 'UnitId';
    KEY_Conversion = 'Conversion';

    PURCHASE_INVOICE_ITEMS_TABLE = 'PurchaseInvoiceItemsTable';

    PURCHASE_INVOICE_ITEMS_CREATE_SQL =
      "CREATE TABLE IF NOT EXISTS '" +
      this.PURCHASE_INVOICE_ITEMS_TABLE +
      "' (" +
      this.KEY_ROWID + " INTEGER PRIMARY KEY AUTOINCREMENT, " +
      this.KEY_BillingMasterId + " INT DEFAULT 0 NOT NULL, " +
      this.KEY_ItemId + " INT DEFAULT 0 NOT NULL, " +
      this.KEY_ItemCode + " TEXT DEFAULT '' NOT NULL, " +
      this.KEY_UnitId + " INT DEFAULT 0 NOT NULL, " +
      this.KEY_Qty + " DECIMAL, " +
      this.KEY_Rate + " DECIMAL, " +
      this.KEY_Amount + " DECIMAL, " +
      this.KEY_Conversion + " DECIMAL, unique (" + this.KEY_ROWID + "))"
  })();


}

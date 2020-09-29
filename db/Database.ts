/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import SQLite from 'react-native-sqlite-storage';
import { DatabaseInitialization } from './DatabaseInitialization';
import * as Constant from './DBConstant';
import * as appConstant from '../constant/AppConstant';
import { DBVariable } from './DBVariable';

export interface Database {
  open(): Promise<SQLite.SQLiteDatabase>;
  close(): Promise<void>;


  getAlterOn(tablename: String, tablekey: String,): Promise<string>;

  //insert data
  insertUserData(jsonArray: string): any;

  insertUpdateBrand(jsonArray: string): any;

  insertUpdateDistributorData(jsonArray: string): any;

  insertUpdateDealerData(jsonArray: string): any;

  insertUpdateItemMasterData(jsonArray: string): any;

  insertUpdateItemGroupData(jsonArray: string): any;

  insertUpdateUnitMasterData(jsonArray: string): any;

  insertUpdateDivisionData(jsonArray: string): any;

  insertUpdateUserDivisionMappingData(jsonArray: string): any;

  insertUpdateCityMasterData(jsonArray: string): any;

  insertUpdateStateMasterData(jsonArray: string): any;

  insertUpdatePlacedOrderData(jsonArray: string): any;

  insertUpdateReceivedOrderData(jsonArray: string): any;

  insertUpdateBillingData(jsonArray: string): any;

  insertUpdateGetDesignationData(jsonArray: string): any;

  // insertUpdateGetDistributionDivisionTagging(jsonArray: string): any;

  //insertUpdateGetDivisionTagging(jsonArray: string): any;


  updateCart(jsonArray: string): any;

  //updateCartDetail(jsonArray: string): any;

}

class DatabaseImpl implements Database {
  private databaseName = Constant.DBConstant.FILE_NAME;
  private database: SQLite.SQLiteDatabase | undefined;

  // Open the connection to the database
  public open(): Promise<SQLite.SQLiteDatabase> {
    SQLite.DEBUG(true);
    SQLite.enablePromise(true);
    let databaseInstance: SQLite.SQLiteDatabase;

    return SQLite.openDatabase({
      name: Constant.DBConstant.FILE_NAME,
      location: 'default',
    })
      .then((db) => {
        databaseInstance = db;
        // console.log('[db] Database open!');
        // Perform any database initialization or updates, if needed
        const databaseInitialization = new DatabaseInitialization();
        return databaseInitialization.updateDatabaseTables(databaseInstance);
      })
      .then(() => {
        this.database = databaseInstance;
        return databaseInstance;
      });
  }

  // Close the connection to the database
  public close(): Promise<void> {
    if (this.database === undefined) {
      return Promise.reject('[db] Database was not open; unable to close.');
    }
    return this.database.close().then((status) => {
      console.log('[db] Database closed.');
      this.database = undefined;
    });
  }

  private getDatabase(): Promise<SQLite.SQLiteDatabase> {
    if (this.database !== undefined) {
      return Promise.resolve(this.database);
    }
    // otherwise: open the database first
    return this.open();
  }
  // CRUD operation code goes here

  //-------------------------------- insert into user table--------------------------------------------------//////
  public async insertUserData(output: string) {
    var result = JSON.parse(output);
    try {
      const dbVariable: DBVariable = new DBVariable();
      var userTable = dbVariable.UserTable;

      return await this.getDatabase()
        .then((db) => db)
        .then((sqlitedb) => {
          return this.checkUserId(sqlitedb, result.UserId, userTable.USER_TABLE, userTable.KEY_UserId,)
            .then((id) => id)
            .then((id) => {
              //    console.log('Checked Id : ' + id);
              if (id > 0) {
                //   console.log('Updating Value');
                let sqlQuery = 'update ' + userTable.USER_TABLE + ' set ' + userTable.KEY_PoOrderNo +
                  '= ? ,' + userTable.KEY_SoOrderNo + '= ? ,' + userTable.KEY_UserName + '= ? ,' +
                  userTable.KEY_VoucherNo + '= ? ,' + userTable.KEY_Address + '= ? ,' + userTable.KEY_AadhaarNo +
                  '= ? ,' + userTable.KEY_AlteredOn + '= ? ,' + userTable.KEY_CityId + '= ? ,' + userTable.KEY_EmailId +
                  '= ? ,' + userTable.KEY_GSTNo + '= ? ,' + userTable.KEY_IsActive + '= ? ,' + userTable.KEY_IsActiveBillCustomer +
                  '= ? ,' + userTable.KEY_Latitude + '= ? ,' + userTable.KEY_DrivingLicence + '= ? ,' + userTable.KEY_Longitude +
                  '= ? ,' + userTable.KEY_MobileNo + '= ? ,' + userTable.KEY_PANNO + '= ? ,' + userTable.KEY_Password +
                  '= ? ,' + userTable.KEY_PaytmMobileNo + '= ? ,' + userTable.KEY_Pincode + '= ? ,' + userTable.KEY_StateId +
                  '= ? ,' + userTable.KEY_UPIID + '= ? ,' + userTable.KEY_UserImageURL + '= ? ,' + userTable.KEY_VoterId +
                  '= ? where ' + userTable.KEY_UserId + '=?;';

                let updateData = [result.PoOrderNo, result.SoOrderNo, result.Username, result.VoucherNo, result.address,
                result.adharcardno, result.alteredon, result.cityid, result.email, result.gstnno, result.is_active,
                result.isactivebill, result.latitude, result.licenceno, result.longitude, result.mobileno, result.panno,
                result.password, result.paytmmobileno, result.pincode, result.stateid, result.upi_id, result.userimageurl,
                result.votercardno, id];

                return sqlitedb.executeSql(sqlQuery, updateData);

              } else {
                //console.log('Inserting Value');
                let sqlQuery = 'insert into ' + userTable.USER_TABLE + ' (' + userTable.KEY_UserId +
                  ',' + userTable.KEY_PoOrderNo + ',' + userTable.KEY_SoOrderNo + ',' + userTable.KEY_UserName +
                  ',' + userTable.KEY_VoucherNo + ',' + userTable.KEY_Address + ',' + userTable.KEY_AadhaarNo +
                  ',' + userTable.KEY_AlteredOn + ',' + userTable.KEY_CityId + ',' + userTable.KEY_EmailId +
                  ',' + userTable.KEY_GSTNo + ',' + userTable.KEY_IsActive + ',' + userTable.KEY_IsActiveBillCustomer +
                  ',' + userTable.KEY_Latitude + ',' + userTable.KEY_DrivingLicence + ',' + userTable.KEY_Longitude +
                  ',' + userTable.KEY_MobileNo + ',' + userTable.KEY_PANNO + ',' + userTable.KEY_Password + ',' +
                  userTable.KEY_PaytmMobileNo + ',' + userTable.KEY_Pincode + ',' + userTable.KEY_StateId + ',' +
                  userTable.KEY_UPIID + ',' + userTable.KEY_UserImageURL + ',' + userTable.KEY_VoterId
                  + ') values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';

                let insertdata = [result.UserId, result.PoOrderNo, result.SoOrderNo, result.Username, result.VoucherNo,
                result.address, result.adharcardno, result.alteredon, result.cityid, result.email, result.gstnno,
                result.is_active, result.isactivebill, result.latitude, result.licenceno, result.longitude, result.mobileno,
                result.panno, result.password, result.paytmmobileno, result.pincode, result.stateid, result.upi_id,
                result.userimageurl, result.votercardno,];

                return sqlitedb.executeSql(sqlQuery, insertdata);

              }
            });
        })
        .catch((errorMsg) => {
          console.log(errorMsg);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public checkUserId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database.executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).UserId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }

  //-------------------------------- insert into brand table--------------------------------------------------//////
  public async insertUpdateBrand(jsonArray: string) {
    var result = JSON.parse(jsonArray);
    try {
      //let status = 0;
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        //console.log(obj.brandid);
        await this.executeFunctionBrand(obj.brandid, obj.brandname, obj.brandcode, obj.isactive, obj.designationname,
          obj.alteredon);
      }
      //return status;
    } catch (error) {
      console.log(error);
      //return 0;
    }
  }

  private async executeFunctionBrand(brandid: number, brandname: String, brandcode: String, isactive: String, designationname: String,
    alteredon: String,) {

    const dbVariable: DBVariable = new DBVariable();
    var brandtable = dbVariable.BrandTable;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkBrandId(sqlitedb, brandid, brandtable.BRAND_TABLE, brandtable.KEY_BrandId,)
          .then((id) => id)
          .then((brand_id) => {
            console.log("Checked Brand Id :" + brand_id);
            if (brand_id > 0) {
              let sqlQuery = 'update ' + brandtable.BRAND_TABLE + ' set ' + brandtable.KEY_BrandName + '= ? ,' +
                brandtable.KEY_BrandCode + '= ? ,' + brandtable.KEY_IsActive + '= ? ,' + brandtable.KEY_DesignationName +
                '= ? ,' + brandtable.KEY_AlteredOn + '= ? ,' + brandtable.KEY_IsSerialEnable + '= ? ,' + brandtable.KEY_IsBatchEnable +
                '= ? ,' + brandtable.KEY_SubStringFrom + '= ? ,' + brandtable.KEY_SubStringTo + '= ? where ' + brandtable.KEY_BrandId + '=?;';

              let updateData = [brandname, brandcode, isactive, designationname, alteredon, false, false, 0, 5, brandid,];

              return sqlitedb.executeSql(sqlQuery, updateData);
            } else {
              let sqlQuery = 'insert into ' + brandtable.BRAND_TABLE + ' (' + brandtable.KEY_BrandId + ',' + brandtable.KEY_BrandName +
                ',' + brandtable.KEY_BrandCode + ',' + brandtable.KEY_IsActive + ',' + brandtable.KEY_DesignationName + ',' +
                brandtable.KEY_AlteredOn + ',' + brandtable.KEY_IsSerialEnable + ',' + brandtable.KEY_IsBatchEnable + ',' +
                brandtable.KEY_SubStringFrom + ',' + brandtable.KEY_SubStringTo + ') values(?,?,?,?,?,?,?,?,?,?);';

              let insertdata = [brandid, brandname, brandcode, isactive, designationname, alteredon, false, false, 0, 5,];
              return sqlitedb.executeSql(sqlQuery, insertdata);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public checkBrandId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database.executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).BrandId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }

  /////////////////------------------------  Insert Distributor Table  --------------------------------------//////////////

  public async insertUpdateDistributorData(jsonArray: string) {
    //let sqliteDB: SQLite.SQLiteDatabase;
    var result = JSON.parse(jsonArray);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        //console.log(obj.brandid);
        await this.executeFunctionDistributor(obj.distributorid, obj.address, obj.alteredon, obj.brandid, obj.citycode,
          obj.cityid, obj.cityname, obj.distributorname, obj.emailid, obj.isactive, obj.mappingid, obj.mobileno,
          obj.orderto_dmsledgercode, obj.paytmmobileno, obj.statecode, obj.stateid, obj.statename, obj.upi_id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executeFunctionDistributor(distributorid: number, address: String, alteredon: String, brandid: String,
    citycode: String, cityid: String, cityname: String, distributorname: String, emailid: String, isactive: String,
    mappingid: String, mobileno: String, orderto_dmsledgercode: String, paytmmobileno: String, statecode: String,
    stateid: String, statename: String, upi_id: String,) {

    const dbVariable: DBVariable = new DBVariable();
    var dealerTable = dbVariable.DistributorMaster;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkDistributorId(sqlitedb, distributorid, dealerTable.DISTRIBUTOR_TABLE, dealerTable.KEY_DistributorId,)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + dealerTable.DISTRIBUTOR_TABLE + ' set ' + dealerTable.KEY_DistributorName +
                '= ? ,' + dealerTable.KEY_DistributorCode + '= ? ,' + dealerTable.KEY_DistributorEmail + '= ? ,' + dealerTable.KEY_DistributorMobile +
                '= ? ,' + dealerTable.KEY_MappingId + '= ? ,' + dealerTable.KEY_BrandId + '= ? ,' + dealerTable.KEY_Address +
                '= ? ,' + dealerTable.KEY_UPIId + '= ? ,' + dealerTable.KEY_PaytmMobileNo + '= ? ,' + dealerTable.KEY_CityId +
                '= ? ,' + dealerTable.KEY_CityCode + '= ? ,' + dealerTable.KEY_CityName + '= ? ,' +
                dealerTable.KEY_StateId + '= ? ,' + dealerTable.KEY_StateCode + '= ? ,' + dealerTable.KEY_StateName + '= ? ,' +
                dealerTable.KEY_IsActive + '= ? ,' + dealerTable.KEY_AlteredOn + '= ? where ' + dealerTable.KEY_DistributorId + '=?;';

              let updateData = [distributorname, orderto_dmsledgercode, emailid, mobileno, mappingid,
                brandid, address, upi_id, paytmmobileno, cityid, citycode, cityname, stateid, statecode, statename,
                isactive, alteredon, id];
              return sqlitedb.executeSql(sqlQuery, updateData);
            } else {
              let sqlQuery = 'insert into ' + dealerTable.DISTRIBUTOR_TABLE + ' (' + dealerTable.KEY_DistributorId +
                ',' + dealerTable.KEY_DistributorName + ',' + dealerTable.KEY_DistributorCode + ',' + dealerTable.KEY_DistributorEmail +
                ',' + dealerTable.KEY_DistributorMobile + ',' + dealerTable.KEY_MappingId + ',' + dealerTable.KEY_BrandId +
                ',' + dealerTable.KEY_Address + ',' + dealerTable.KEY_UPIId + ',' + dealerTable.KEY_PaytmMobileNo +
                ',' + dealerTable.KEY_CityId + ',' + dealerTable.KEY_CityCode + ',' + dealerTable.KEY_CityName +
                ',' + dealerTable.KEY_StateId + ',' + dealerTable.KEY_StateCode + ',' + dealerTable.KEY_StateName +
                ',' + dealerTable.KEY_IsActive + ',' + dealerTable.KEY_AlteredOn + ') values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';

              let insertdata = [distributorid, distributorname, orderto_dmsledgercode, emailid, mobileno, mappingid,
                brandid, address, upi_id, paytmmobileno, cityid, citycode, cityname, stateid, statecode, statename,
                isactive, alteredon,];
              return sqlitedb.executeSql(sqlQuery, insertdata);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public checkDistributorId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database.executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).DistributorId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }

  /////////////////------------------------  Insert Distributor Table  --------------------------------------//////////////


  /////////////////------------------------  Insert Dealer Table  --------------------------------------//////////////
  public async insertUpdateDealerData(output: string) {
    var result = JSON.parse(output);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        //console.log(obj.brandid);
        await this.executeDealerInsertUpdate(obj.dealerid, obj.dealername, obj.orderto_dmsledgercode, obj.pincode, obj.mobileno,
          obj.emailid, obj.brandid, obj.address, obj.upi_id, obj.paytmmobileno, obj.pan_no, obj.gstin_no,
          obj.cityid, obj.citycode, obj.cityname, obj.stateid, obj.statecode, obj.statename, obj.margin_brand_id, obj.designation_id,
          obj.rate_margin, obj.isactive, obj.alteredon);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async executeDealerInsertUpdate(dealerid: number, dealername: string, orderto_dmsledgercode: string, pincode: string, mobileno: string,
    emailid: string, brandid: number, address: string, upi_id: string, paytmmobileno: string, pan_no: string, gstin_no: string,
    cityid: string, citycode: string, cityname: string, stateid: string, statecode: string, statename: string, margin_brand_id: string,
    designation_id: string, rate_margin: string, isactive: string, alteredon: string) {

    const dbVariable: DBVariable = new DBVariable();
    var dealerTable = dbVariable.DealerMaster;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkDistributorId(sqlitedb, dealerid, dealerTable.DEALER_TABLE, dealerTable.KEY_DealerId,)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + dealerTable.DEALER_TABLE + ' set ' + dealerTable.KEY_DealerName +
                '= ? ,' + dealerTable.KEY_DealerCode + '= ? ,' + dealerTable.KEY_IsActive + '= ? ,' + dealerTable.KEY_Address +
                '= ? ,' + dealerTable.KEY_CityId + '= ? ,' + dealerTable.KEY_CityName + '= ? ,' + dealerTable.KEY_CityCode +
                '= ? ,' + dealerTable.KEY_StateId + '= ? ,' + dealerTable.KEY_StateName + '= ? ,' + dealerTable.KEY_StateCode +
                '= ? ,' + dealerTable.KEY_Pincode + '= ? ,' + dealerTable.KEY_ContactNo + '= ? ,' +
                dealerTable.KEY_EmailId + '= ? ,' + dealerTable.KEY_UPIId + '= ? ,' + dealerTable.KEY_PaytmMobileNo + '= ? ,' +
                dealerTable.KEY_PanNo + '= ? ,' + dealerTable.KEY_GSTINNo + '= ? ,' + dealerTable.KEY_BrandId + '= ? ,' +
                dealerTable.KEY_MappingId + '= ? ,' + dealerTable.KEY_MarginBrandId + '= ? ,' + dealerTable.KEY_DesignationId + '= ? ,' +
                dealerTable.KEY_RateMargin + '= ? ,' + dealerTable.KEY_AlteredOn + '= ? ,' + dealerTable.KEY_IsSync + '= ? where ' + dealerTable.KEY_DealerId + '=?;';

              let updateData = [dealername, orderto_dmsledgercode, isactive, address, cityid, cityname, citycode, stateid, statename, statecode, pincode,
                mobileno, emailid, upi_id, paytmmobileno, pan_no, gstin_no, brandid, "", margin_brand_id, designation_id, rate_margin, alteredon, true, id];
              return sqlitedb.executeSql(sqlQuery, updateData);
            } else {
              let sqlQuery = 'insert into ' + dealerTable.DEALER_TABLE + ' (' + dealerTable.KEY_DealerId + ',' + dealerTable.KEY_DealerName +
                ',' + dealerTable.KEY_DealerCode + ',' + dealerTable.KEY_IsActive + ',' + dealerTable.KEY_Address +
                ',' + dealerTable.KEY_CityId + ',' + dealerTable.KEY_CityName + ',' + dealerTable.KEY_CityCode +
                ',' + dealerTable.KEY_StateId + ',' + dealerTable.KEY_StateName + ',' + dealerTable.KEY_StateCode +
                ',' + dealerTable.KEY_Pincode + ',' + dealerTable.KEY_ContactNo + ',' + dealerTable.KEY_EmailId +
                ',' + dealerTable.KEY_UPIId + ',' + dealerTable.KEY_PaytmMobileNo + ',' + dealerTable.KEY_PanNo +
                ',' + dealerTable.KEY_GSTINNo + ',' + dealerTable.KEY_BrandId + ',' + dealerTable.KEY_MappingId +
                ',' + dealerTable.KEY_MarginBrandId + ',' + dealerTable.KEY_DesignationId + ',' + dealerTable.KEY_RateMargin +
                ',' + dealerTable.KEY_AlteredOn + ',' + dealerTable.KEY_IsSync + ') values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';

              let insertdata = [dealerid, dealername, orderto_dmsledgercode, isactive, address, cityid, cityname, citycode, stateid, statename, statecode, pincode,
                mobileno, emailid, upi_id, paytmmobileno, pan_no, gstin_no, brandid, "", margin_brand_id, designation_id, rate_margin, alteredon, true,];
              return sqlitedb.executeSql(sqlQuery, insertdata);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public checkDealerId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database.executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).DealerId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }

  /////////////////------------------------  Insert Dealer Table  --------------------------------------//////////////

  /////////////////------------------------  Insert Item Master Table  --------------------------------------//////////////

  public async insertUpdateItemMasterData(jsonArray: string) {
    //let sqliteDB: SQLite.SQLiteDatabase;
    var result = JSON.parse(jsonArray);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        //console.log(obj.brandid);

        await this.executeFunctionItem(obj.itemid, obj.itemname, obj.itemcode, obj.baseuom, obj.baseunitid,
          obj.altuom, obj.altunitid, obj.noofdecimalplaces, obj.conversion, obj.denominator, obj.rate,
          obj.itemgroupid, obj.brandid, obj.divisionid, obj.isactive, obj.mrp, obj.ptr, obj.is_batch_enable,
          obj.is_serial_enable, obj.alteredon, obj.primarycategoryid, obj.secondarycategoryid);

      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executeFunctionItem(itemid: number, itemname: String, itemcode: String, baseuom: String,
    baseunitid: String, altuom: String, altunitid: String, noofdecimalplaces: String, conversion: String,
    denominator: String, rate: String, itemgroupid: String, brandid: String, divisionid: String, isactive: String,
    mrp: String, ptr: String, is_batch_enable: String, is_serial_enable: String, alteredon: String, primarycategoryid: String, secondarycategoryid: String) {

    const dbVariable: DBVariable = new DBVariable();
    var itemtable = dbVariable.ItemsMaster;

    let data = [itemid, itemname, itemcode, baseuom, baseunitid, altuom, altunitid, noofdecimalplaces, conversion, denominator, rate, itemgroupid,
      brandid, divisionid, isactive, mrp, ptr, is_batch_enable, is_serial_enable, alteredon,];
    console.log('data', data);

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkItemId(sqlitedb, itemid, itemtable.ITEMS_TABLE, itemtable.KEY_ItemId,)
          .then((id) => id)
          .then((id) => {
            //  console.log('Checked Id : ' + id);
            if (id > 0) {
              //   console.log('Updating Value');
              let sqlQuery = 'update ' + itemtable.ITEMS_TABLE + ' set ' + itemtable.KEY_ItemName +
                '= ? ,' + itemtable.KEY_ItemCode + '= ? ,' + itemtable.KEY_UMO + '= ? ,' + itemtable.KEY_UMOId +
                '= ? ,' + itemtable.KEY_AltUOM + '= ? ,' + itemtable.KEY_AltUOMId + '= ? ,' + itemtable.KEY_NoOfDecimalPlaces +
                '= ? ,' + itemtable.KEY_Conversion + '= ? ,' + itemtable.KEY_Denominator + '= ? ,' + itemtable.KEY_ItemRates +
                '= ? ,' + itemtable.KEY_GroupId + '= ? ,' + itemtable.KEY_BrandId + '= ? ,' + itemtable.KEY_DivisionId +
                '= ? ,' + itemtable.KEY_IsActive + '= ? ,' + itemtable.KEY_MRP + '= ? ,' + itemtable.KEY_PTR +
                '= ? ,' + itemtable.KEY_IsBatchEnable + '= ? ,' + itemtable.KEY_IsSerialEnable +
                '= ? ,' + itemtable.KEY_PrimaryCategoryId + '= ? ,' + itemtable.KEY_SecondaryCategoryId +
                '= ? ,' + itemtable.KEY_AlteredOn + '= ? where ' + itemtable.KEY_ItemId + '=?;';

              let updateData = [itemname, itemcode, baseuom, baseunitid, altuom, altunitid, noofdecimalplaces, conversion, denominator, rate,
                itemgroupid, brandid, divisionid, isactive, mrp, ptr, is_batch_enable, is_serial_enable, primarycategoryid, secondarycategoryid,
                alteredon, id,];
              return sqlitedb.executeSql(sqlQuery, updateData);

            } else {
              //   console.log('Inserting Value');
              let sqlQuery = 'insert into ' + itemtable.ITEMS_TABLE + ' (' + itemtable.KEY_ItemId +
                ',' + itemtable.KEY_ItemName + ',' + itemtable.KEY_ItemCode + ',' + itemtable.KEY_UMO +
                ',' + itemtable.KEY_UMOId + ',' + itemtable.KEY_AltUOM + ',' + itemtable.KEY_AltUOMId +
                ',' + itemtable.KEY_NoOfDecimalPlaces + ',' + itemtable.KEY_Conversion + ',' + itemtable.KEY_Denominator +
                ',' + itemtable.KEY_ItemRates + ',' + itemtable.KEY_GroupId + ',' + itemtable.KEY_BrandId +
                ',' + itemtable.KEY_DivisionId + ',' + itemtable.KEY_IsActive + ',' + itemtable.KEY_MRP +
                ',' + itemtable.KEY_PTR + ',' + itemtable.KEY_IsBatchEnable + ',' + itemtable.KEY_IsSerialEnable +
                ',' + itemtable.KEY_PrimaryCategoryId + ',' + itemtable.KEY_SecondaryCategoryId +
                ',' + itemtable.KEY_AlteredOn + ') values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';

              let insertdata = [itemid, itemname, itemcode, baseuom, baseunitid, altuom, altunitid, noofdecimalplaces, conversion, denominator,
                rate, itemgroupid, brandid, divisionid, isactive, mrp, ptr, is_batch_enable, is_serial_enable, primarycategoryid, secondarycategoryid
                , alteredon,];
              return sqlitedb.executeSql(sqlQuery, insertdata);
            }
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public checkItemId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database.executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).ItemId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }


  /////////////////------------------------  Insert Item Master Table  --------------------------------------//////////////



  /////////////////------------------------  Insert Item Group Table  --------------------------------------//////////////
  public async insertUpdateItemGroupData(jsonArray: string) {
    var result = JSON.parse(jsonArray);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        await this.executeFunctionItemGroup(obj.itemgroupid, obj.itemgroupname, obj.parentid, obj.itemgroupcode, obj.brandid, obj.alteredon, obj.isactive,);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executeFunctionItemGroup(itemgroupid: number, itemgroupname: String, parentid: String, itemgroupcode: String, brandid: String,
    alteredon: String, isactive: String,) {

    const dbVariable: DBVariable = new DBVariable();
    var itemGrouptTable = dbVariable.ItemGroupMaster;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkItemGroupId(sqlitedb, itemgroupid, itemGrouptTable.ITEM_GROUP_TABLE, itemGrouptTable.KEY_ItemGroupId,)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + itemGrouptTable.ITEM_GROUP_TABLE + ' set ' + itemGrouptTable.KEY_GroupName +
                '= ? ,' + itemGrouptTable.KEY_GroupCode + '= ? ,' + itemGrouptTable.KEY_ParentGroupId + '= ? ,' +
                itemGrouptTable.KEY_BrandId + '= ? ,' + itemGrouptTable.KEY_IsActive + '= ? ,' + itemGrouptTable.KEY_AlteredOn +
                '= ? where ' + itemGrouptTable.KEY_ItemGroupId + '=?;';

              let updateData = [itemgroupname, itemgroupcode, parentid, brandid, isactive, alteredon, id,];
              return sqlitedb.executeSql(sqlQuery, updateData);

            } else {
              let sqlQuery = 'insert into ' + itemGrouptTable.ITEM_GROUP_TABLE + ' (' + itemGrouptTable.KEY_ItemGroupId +
                ',' + itemGrouptTable.KEY_GroupName + ',' + itemGrouptTable.KEY_GroupCode + ',' + itemGrouptTable.KEY_ParentGroupId +
                ',' + itemGrouptTable.KEY_BrandId + ',' + itemGrouptTable.KEY_IsActive + ',' + itemGrouptTable.KEY_AlteredOn +
                ') values(?,?,?,?,?,?,?);';

              let insertdata = [itemgroupid, itemgroupname, itemgroupcode, parentid, brandid, isactive, alteredon,];

              return sqlitedb.executeSql(sqlQuery, insertdata);
            }
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public checkItemGroupId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database.executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).ItemGroupId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }


  /////////////////------------------------  Insert Item Group Table  --------------------------------------//////////////



  /////////////////------------------------  Insert Unit Master Table  --------------------------------------//////////////
  public async insertUpdateUnitMasterData(jsonArray: string) {
    var result = JSON.parse(jsonArray);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        await this.executeFunctionUnitMaster(obj.unit_id, obj.unit_name, obj.symbol, obj.brandid, obj.alteredon, obj.isactive,);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executeFunctionUnitMaster(unit_id: number, unit_name: String, symbol: String, brandid: String, alteredon: String, isactive: String,) {

    const dbVariable: DBVariable = new DBVariable();
    var unitMasterTable = dbVariable.UnitMaster;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkUnitMasterId(sqlitedb, unit_id, unitMasterTable.UNITMASTER_MASTER, unitMasterTable.KEY_UnitId,)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + unitMasterTable.UNITMASTER_MASTER + ' set ' + unitMasterTable.KEY_UnitName +
                '= ? ,' + unitMasterTable.KEY_UnitSymbol + '= ? ,' + unitMasterTable.KEY_AlteredOn + '= ? ,' + unitMasterTable.KEY_BrandId +
                '= ? ,' + unitMasterTable.KEY_IsActive + '= ? where ' + unitMasterTable.KEY_UnitId + '=?;';

              let updateData = [unit_name, symbol, alteredon, brandid, isactive, id,];
              return sqlitedb.executeSql(sqlQuery, updateData);

            } else {
              let sqlQuery = 'insert into ' + unitMasterTable.UNITMASTER_MASTER + ' (' + unitMasterTable.KEY_UnitId +
                ',' + unitMasterTable.KEY_UnitName + ',' + unitMasterTable.KEY_UnitSymbol + ',' + unitMasterTable.KEY_BrandId +
                ',' + unitMasterTable.KEY_IsActive + ',' + unitMasterTable.KEY_AlteredOn + ') values(?,?,?,?,?,?);';

              let insertdata = [unit_id, unit_name, symbol, brandid, isactive, alteredon,];

              return sqlitedb.executeSql(sqlQuery, insertdata);
            }
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public checkUnitMasterId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database.executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).UnitId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }


  /////////////////------------------------  Insert Unit Master Table  --------------------------------------//////////////


  /////////////////------------------------  Insert Division Table  --------------------------------------//////////////
  public async insertUpdateDivisionData(jsonArray: string) {
    var result = JSON.parse(jsonArray);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        await this.executeFunctionDivision(obj.divisionid, obj.divisionname, obj.divisioncode, obj.brandid, obj.alteredon, obj.isactive,);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executeFunctionDivision(divisionid: number, divisionname: String, divisioncode: String, brandid: String, alteredon: String, isactive: String,) {

    const dbVariable: DBVariable = new DBVariable();
    var divisionTable = dbVariable.DivisionTable;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkDivisionId(sqlitedb, divisionid, divisionTable.DIVISION_TABLE, divisionTable.KEY_DivisionId,)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + divisionTable.DIVISION_TABLE + ' set ' + divisionTable.KEY_DivisionName +
                '= ? ,' + divisionTable.KEY_DivisionCode + '= ? ,' + divisionTable.KEY_AlteredOn + '= ? ,' +
                divisionTable.KEY_BrandId + '= ? ,' + divisionTable.KEY_IsActive + '= ? where ' + divisionTable.KEY_DivisionId + '=?;';

              let updateData = [divisionname, divisioncode, alteredon, brandid, isactive, id,];
              return sqlitedb.executeSql(sqlQuery, updateData);

            } else {
              let sqlQuery = 'insert into ' + divisionTable.DIVISION_TABLE + ' (' + divisionTable.KEY_DivisionId +
                ',' + divisionTable.KEY_DivisionName + ',' + divisionTable.KEY_DivisionCode + ',' + divisionTable.KEY_BrandId +
                ',' + divisionTable.KEY_IsActive + ',' + divisionTable.KEY_AlteredOn + ') values(?,?,?,?,?,?);';
              let insertdata = [divisionid, divisionname, divisioncode, brandid, isactive, alteredon,];

              return sqlitedb.executeSql(sqlQuery, insertdata);
            }
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public checkDivisionId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database.executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).DivisionId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }

  /////////////////------------------------  Insert Division Table  --------------------------------------//////////////

  /////////////////------------------------  User Division Mapping Table  --------------------------------------//////////////
  public async insertUpdateUserDivisionMappingData(jsonArray: string) {
    var result = JSON.parse(jsonArray);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        await this.executeFunctionUserDivisionMapping(obj.userdivisionmappingid, obj.distributorname, obj.emailid, obj.brandid, obj.alteredon,
          obj.isactive, obj.divisionid, obj.mobileno, obj.selleruserid);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executeFunctionUserDivisionMapping(userdivisionmappingid: number, distributorname: String, emailid: String, brandid: String,
    alteredon: String, isactive: String, divisionid: String, mobileno: String, selleruserid: String,) {

    const dbVariable: DBVariable = new DBVariable();
    var userDivisionMapTable = dbVariable.DivisionMappingTable;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkUserDivisionMapId(sqlitedb, userdivisionmappingid, userDivisionMapTable.DIVISIONMAP_TABLE, userDivisionMapTable.KEY_UserDivisionMappingId,)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + userDivisionMapTable.DIVISIONMAP_TABLE + ' set ' + userDivisionMapTable.KEY_DistributorName +
                '= ? ,' + userDivisionMapTable.KEY_EmailId + '= ? ,' + userDivisionMapTable.KEY_BrandId + '= ? ,' + userDivisionMapTable.KEY_IsActive +
                '= ? ,' + userDivisionMapTable.KEY_AlteredOn + '= ? ,' + userDivisionMapTable.KEY_DivisionId + '= ? ,' +
                userDivisionMapTable.KEY_MobileNo + '= ? ,' + userDivisionMapTable.KEY_SellerUserId + '= ? where ' + userDivisionMapTable.KEY_UserDivisionMappingId + '=?;';

              let updateData = [distributorname, emailid, brandid, isactive, alteredon, divisionid, mobileno, selleruserid, id,];
              return sqlitedb.executeSql(sqlQuery, updateData);

            } else {
              let sqlQuery = 'insert into ' + userDivisionMapTable.DIVISIONMAP_TABLE + ' (' + userDivisionMapTable.KEY_UserDivisionMappingId +
                ',' + userDivisionMapTable.KEY_DistributorName + ',' + userDivisionMapTable.KEY_EmailId + ',' + userDivisionMapTable.KEY_BrandId +
                ',' + userDivisionMapTable.KEY_IsActive + ',' + userDivisionMapTable.KEY_AlteredOn + ',' + userDivisionMapTable.KEY_DivisionId +
                ',' + userDivisionMapTable.KEY_MobileNo + ',' + userDivisionMapTable.KEY_SellerUserId + ') values(?,?,?,?,?,?,?,?,?);';

              let insertdata = [userdivisionmappingid, distributorname, emailid, brandid, isactive, alteredon, divisionid, mobileno, selleruserid,];

              return sqlitedb.executeSql(sqlQuery, insertdata);
            }
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public checkUserDivisionMapId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database.executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).UserDivisionMappingId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }
  /////////////////------------------------  User Division Mapping Table  --------------------------------------//////////////


  /////////////////------------------------  City Master Table  --------------------------------------//////////////
  public async insertUpdateCityMasterData(jsonArray: string) {
    var result = JSON.parse(jsonArray);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        await this.executeFunctionCityMaster(obj.cityid, obj.cityname, obj.citycode, obj.stateid, obj.brandid, obj.alteredon,
          obj.isactive);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executeFunctionCityMaster(cityid: number, cityname: String, citycode: String, stateid: String, brandid: String, alteredon: String,
    isactive: String,) {

    const dbVariable: DBVariable = new DBVariable();
    var cityTable = dbVariable.CityMaster;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkCityId(sqlitedb, cityid, cityTable.CITYMASTERTABLE, cityTable.KEY_CityId,)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + cityTable.CITYMASTERTABLE + ' set ' + cityTable.KEY_CityName +
                '= ? ,' + cityTable.KEY_CityCode + '= ? ,' + cityTable.KEY_BrandId + '= ? ,' + cityTable.KEY_IsActive +
                '= ? ,' + cityTable.KEY_AlteredOn + '= ? ,' + cityTable.KEY_StateId + '= ? where ' + cityTable.KEY_CityId + '=?;';

              let updateData = [cityname, citycode, brandid, isactive, alteredon, stateid, id,];
              return sqlitedb.executeSql(sqlQuery, updateData);

            } else {
              let sqlQuery = 'insert into ' + cityTable.CITYMASTERTABLE + ' (' + cityTable.KEY_CityId + ',' +
                cityTable.KEY_CityName + ',' + cityTable.KEY_CityCode + ',' + cityTable.KEY_BrandId + ',' +
                cityTable.KEY_IsActive + ',' + cityTable.KEY_AlteredOn + ',' + cityTable.KEY_StateId + ') values(?,?,?,?,?,?,?);';

              let insertdata = [cityid, cityname, citycode, brandid, isactive, alteredon, stateid,];

              return sqlitedb.executeSql(sqlQuery, insertdata);
            }
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public checkCityId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database.executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).CityId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }

  /////////////////------------------------  Insert City Master Table  --------------------------------------//////////////


  /////////////////------------------------  State Master Table  --------------------------------------//////////////
  public async insertUpdateStateMasterData(jsonArray: string) {
    var result = JSON.parse(jsonArray);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        await this.executeFunctionStateMaster(obj.stateid, obj.statename, obj.statecode, obj.countryid, obj.countryname, obj.countrycode,
          obj.brandid, obj.alteredon, obj.isactive);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executeFunctionStateMaster(stateid: number, statename: String, statecode: String, countryid: String, countryname: String,
    countrycode: String, brandid: String, alteredon: String, isactive: String,) {

    const dbVariable: DBVariable = new DBVariable();
    var stateTable = dbVariable.StateMaster;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkStateId(sqlitedb, stateid, stateTable.STATEMASTERTABLE, stateTable.KEY_StateId,)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + stateTable.STATEMASTERTABLE + ' set ' + stateTable.KEY_StateName +
                '= ? ,' + stateTable.KEY_StateCode + '= ? ,' + stateTable.KEY_BrandId + '= ? ,' + stateTable.KEY_IsActive +
                '= ? ,' + stateTable.KEY_AlteredOn + '= ? ,' + stateTable.KEY_CountryId + '= ? ,' + stateTable.KEY_CountryCode +
                '= ? ,' + stateTable.KEY_CountryName + '= ? where ' + stateTable.KEY_StateId + '=?;';

              let updateData = [statename, statecode, countryid, countryname, countrycode, brandid, alteredon, id];
              return sqlitedb.executeSql(sqlQuery, updateData);

            } else {
              let sqlQuery = 'insert into ' + stateTable.STATEMASTERTABLE + ' (' + stateTable.KEY_StateId +
                ',' + stateTable.KEY_StateName + ',' + stateTable.KEY_StateCode + ',' + stateTable.KEY_BrandId +
                ',' + stateTable.KEY_IsActive + ',' + stateTable.KEY_AlteredOn + ',' + stateTable.KEY_CountryId +
                ',' + stateTable.KEY_CountryCode + ',' + stateTable.KEY_CountryName + ') values(?,?,?,?,?,?,?,?,?);';

              let insertdata = [stateid, statename, statecode, brandid, isactive, alteredon, countryid, countrycode, countryname];

              return sqlitedb.executeSql(sqlQuery, insertdata);
            }
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public checkStateId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database
      .executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).StateId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }

  /////////////////------------------------  Insert State Master Table  --------------------------------------//////////////

  ////////////////-------------------------  Insert Primary Category Master Table ---------------------------//////////////

  public async insertUpdatePrimaryCategoryData(jsonArray: string) {
    var result = JSON.parse(jsonArray);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        await this.executeFunctionPrimaryCategory(obj.attributecode, obj.attributevalue, obj.brandid, obj.primarycategoryid, obj.alteredon);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executeFunctionPrimaryCategory(attributecode: number, attributevalue: String, primarycategoryid: number,
    brandid: String, alteredon: String) {

    const dbVariable: DBVariable = new DBVariable();
    var primaryCategoryTable = dbVariable.PrimaryCategory;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkStateId(sqlitedb, primarycategoryid, primaryCategoryTable.PRIMARY_CATEGORY_TABLE, primaryCategoryTable.KEY_PrimaryCategoryId,)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + primaryCategoryTable.PRIMARY_CATEGORY_TABLE + ' set ' + primaryCategoryTable.KEY_AttributeCode +
                '= ? ,' + primaryCategoryTable.KEY_AttributeValue + '= ? ,' + primaryCategoryTable.KEY_BrandId +
                '= ? ,' + primaryCategoryTable.KEY_AlteredOn +
                '= ? where ' + primaryCategoryTable.KEY_PrimaryCategoryId + '=?;';

              let updateData = [attributecode, attributevalue, brandid, alteredon, id];
              return sqlitedb.executeSql(sqlQuery, updateData);

            } else {
              let sqlQuery = 'insert into ' + primaryCategoryTable.PRIMARY_CATEGORY_TABLE + ' (' + primaryCategoryTable.KEY_PrimaryCategoryId +
                ',' + primaryCategoryTable.KEY_AttributeCode + ',' + primaryCategoryTable.KEY_AttributeValue + ',' + primaryCategoryTable.KEY_BrandId +
                ',' + primaryCategoryTable.KEY_AlteredOn + ') values(?,?,?,?,?);';

              let insertdata = [primarycategoryid, attributecode, attributevalue, brandid, alteredon];
              return sqlitedb.executeSql(sqlQuery, insertdata);
            }
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public checkPrimaryCategoryId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database
      .executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).StateId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }



  ////////////////-------------------------  Insert Primary Category Master Table ---------------------------//////////////




  ////////////////-------------------------  Insert Secondary Category Master Table ---------------------------//////////////

  public async insertUpdateSecondaryCategoryData(jsonArray: string) {
    var result = JSON.parse(jsonArray);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        await this.executeFunctionSecondaryCategory(obj.attributecode, obj.attributevalue, obj.brandid, obj.secondarycategoryid, obj.alteredon);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executeFunctionSecondaryCategory(attributecode: number, attributevalue: String, secondarycategoryid: number,
    brandid: String, alteredon: String) {

    const dbVariable: DBVariable = new DBVariable();
    var secondaryCategoryTable = dbVariable.SecondaryCategory;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkStateId(sqlitedb, secondarycategoryid, secondaryCategoryTable.SECONDARY_CATEGORY_TABLE, secondaryCategoryTable.KEY_SecondaryCategoryId,)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + secondaryCategoryTable.SECONDARY_CATEGORY_TABLE + ' set ' + secondaryCategoryTable.KEY_AttributeCode +
                '= ? ,' + secondaryCategoryTable.KEY_AttributeValue + '= ? ,' + secondaryCategoryTable.KEY_BrandId +
                '= ? ,' + secondaryCategoryTable.KEY_AlteredOn +
                '= ? where ' + secondaryCategoryTable.KEY_SecondaryCategoryId + '=?;';

              let updateData = [attributecode, attributevalue, brandid, alteredon, id];
              return sqlitedb.executeSql(sqlQuery, updateData);

            } else {
              let sqlQuery = 'insert into ' + secondaryCategoryTable.SECONDARY_CATEGORY_TABLE + ' (' + secondaryCategoryTable.KEY_SecondaryCategoryId +
                ',' + secondaryCategoryTable.KEY_AttributeCode + ',' + secondaryCategoryTable.KEY_AttributeValue + ',' + secondaryCategoryTable.KEY_BrandId +
                ',' + secondaryCategoryTable.KEY_AlteredOn + ') values(?,?,?,?,?);';

              let insertdata = [secondarycategoryid, attributecode, attributevalue, brandid, alteredon];
              return sqlitedb.executeSql(sqlQuery, insertdata);
            }
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public checkSecondaryCategoryId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database
      .executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).StateId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }



  ////////////////-------------------------  Insert Secondary Category Master Table ---------------------------//////////////








  /////////////////------------------------  Get Placed Order Table  --------------------------------------//////////////
  public async insertUpdatePlacedOrderData(jsonArray: string) {
    var result = JSON.parse(jsonArray);
    //console.log("Placed Order JSON :" + result);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        await this.executePlacedOrder(obj.orderid, obj.userid, obj.distributor_id, obj.order_date, obj.createdon,
          obj.nettotal, obj.brandid, obj.cancelstatus, obj.canceldate, obj.cancelremarks, obj.approvedstatus,
          obj.approveddate, obj.approvedremarks, obj.alteredon, obj.is_sync, obj.apiorderno, obj.weborderno,
          obj.remark, obj.approve_rejectstatus, obj.latitude, obj.longitude, JSON.stringify(obj.Item));
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executePlacedOrder(orderid: number, userid: number, distributor_id: number, order_date: string,
    createdon: string, nettotal: string, brandid: number, cancelstatus: string, canceldate: string, cancelremarks: string,
    approvedstatus: string, approveddate: string, approvedremarks: string, alteredon: string, is_sync: string,
    apiorderno: string, weborderno: string, remark: string, approve_rejectstatus: string, latitude: string, longitude: string, itemArray: string) {

    const dbVariable: DBVariable = new DBVariable();
    var getPlacedOrderTable = dbVariable.OrderTable;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkPlacedOrderId(sqlitedb, orderid, getPlacedOrderTable.ORDER_TABLE, getPlacedOrderTable.KEY_OrderId,)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + getPlacedOrderTable.ORDER_TABLE + ' set ' + getPlacedOrderTable.KEY_UserId +
                '= ? ,' + getPlacedOrderTable.KEY_DistributorId + '= ? ,' + getPlacedOrderTable.KEY_DistributorCode +
                '= ? ,' + getPlacedOrderTable.KEY_OrderDate + '= ? ,' + getPlacedOrderTable.KEY_AppOrderNo +
                '= ? ,' + getPlacedOrderTable.KEY_WebOrderNo + '= ? ,' + getPlacedOrderTable.KEY_CreatedOn +
                '= ? ,' + getPlacedOrderTable.KEY_NetTotal + '= ? ,' + getPlacedOrderTable.KEY_BrandId +
                '= ? ,' + getPlacedOrderTable.KEY_CancelStatus + '= ? ,' + getPlacedOrderTable.KEY_CancelDate +
                '= ? ,' + getPlacedOrderTable.KEY_CancelRemark + '= ? ,' + getPlacedOrderTable.KEY_ApprovedStatus +
                '= ? ,' + getPlacedOrderTable.KEY_ApprovedDate + '= ? ,' + getPlacedOrderTable.KEY_ApprovedRemark +
                '= ? ,' + getPlacedOrderTable.KEY_AlteredOn + '= ? ,' + getPlacedOrderTable.KEY_IsSync +
                '= ? ,' + getPlacedOrderTable.KEY_AddedInCart + '= ? ,' + getPlacedOrderTable.KEY_UserRemark +
                '= ? ,' + getPlacedOrderTable.KEY_Latitude + '= ? ,' + getPlacedOrderTable.KEY_Longitude +
                '= ? ,' + getPlacedOrderTable.KEY_ApproveRejectStatus + '= ? where ' + getPlacedOrderTable.KEY_OrderId + '=?;';

              let updateData = [userid, distributor_id, "", order_date, apiorderno, weborderno, createdon,
                nettotal, brandid, cancelstatus, canceldate, cancelremarks, approvedstatus, approveddate,
                approvedremarks, alteredon, is_sync, false, remark, latitude, longitude, approve_rejectstatus, id];

              let status = sqlitedb.executeSql(sqlQuery, updateData);
              this.insertUpdateOrderItemDetails(itemArray, sqlitedb);
              return status;
            } else {
              //      console.log('Inserting Value');
              let sqlQuery = 'insert into ' + getPlacedOrderTable.ORDER_TABLE + ' (' + getPlacedOrderTable.KEY_OrderId +
                ',' + getPlacedOrderTable.KEY_UserId +
                ',' + getPlacedOrderTable.KEY_DistributorId + ',' + getPlacedOrderTable.KEY_DistributorCode +
                ',' + getPlacedOrderTable.KEY_OrderDate + ',' + getPlacedOrderTable.KEY_AppOrderNo +
                ',' + getPlacedOrderTable.KEY_WebOrderNo + ',' + getPlacedOrderTable.KEY_CreatedOn +
                ',' + getPlacedOrderTable.KEY_NetTotal + ',' + getPlacedOrderTable.KEY_BrandId +
                ',' + getPlacedOrderTable.KEY_CancelStatus + ',' + getPlacedOrderTable.KEY_CancelDate +
                ',' + getPlacedOrderTable.KEY_CancelRemark + ',' + getPlacedOrderTable.KEY_ApprovedStatus +
                ',' + getPlacedOrderTable.KEY_ApprovedDate + ',' + getPlacedOrderTable.KEY_ApprovedRemark +
                ',' + getPlacedOrderTable.KEY_AlteredOn + ',' + getPlacedOrderTable.KEY_IsSync +
                ',' + getPlacedOrderTable.KEY_AddedInCart + ',' + getPlacedOrderTable.KEY_UserRemark +
                ',' + getPlacedOrderTable.KEY_Latitude + ',' + getPlacedOrderTable.KEY_Longitude +
                ',' + getPlacedOrderTable.KEY_ApproveRejectStatus + ') values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';

              let insertdata = [orderid, userid, distributor_id, "", order_date, apiorderno, weborderno, createdon,
                nettotal, brandid, cancelstatus, canceldate, cancelremarks, approvedstatus, approveddate,
                approvedremarks, alteredon, is_sync, false, remark, latitude, longitude, approve_rejectstatus,];

              let status = sqlitedb.executeSql(sqlQuery, insertdata);
              this.insertUpdateOrderItemDetails(itemArray, sqlitedb);
              return status;
            }
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public async insertUpdateOrderItemDetails(itemArray: string, sqlitedb: SQLite.SQLiteDatabase) {
    try {
      var itemArrayList = JSON.parse(itemArray);
      //console.log("Placed Order Item Obj :" + itemArrayList[0].orderid);
      for (var i = 0; i < itemArrayList.length; i++) {
        var obj = itemArrayList[i];
        await this.executeOrderItem(obj.orderid, obj.item_id, obj.item_code, obj.qty, obj.rate,
          obj.amount, obj.UnitId, obj.conversion, obj.pendingqty, sqlitedb);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async executeOrderItem(orderid: number, item_id: number, item_code: string, qty: string, rate: string,
    amount: string, UnitId: string, conversion: string, pendingqty: string, sqlitedb: SQLite.SQLiteDatabase) {

    const dbVariable: DBVariable = new DBVariable();
    var billingDetailTable = dbVariable.OrderDetailsTable;

    return await this.checkOrderDetailsId(sqlitedb, orderid, item_id, billingDetailTable.ORDERDETAILS_TABLE, billingDetailTable.KEY_OrderId, billingDetailTable.KEY_ItemId)
      .then((status) => status)
      .then((rowStatus) => {

        if (rowStatus) {

          let sqlQuery = 'update ' + billingDetailTable.ORDERDETAILS_TABLE + ' set ' + billingDetailTable.KEY_OrderId +
            '= ? ,' + billingDetailTable.KEY_ItemId + '= ? ,' + billingDetailTable.KEY_ItemCode +
            '= ? ,' + billingDetailTable.KEY_UnitId + '= ? ,' + billingDetailTable.KEY_Qty +
            '= ? ,' + billingDetailTable.KEY_Rate + '= ? ,' + billingDetailTable.KEY_Conversion +
            '= ? ,' + billingDetailTable.KEY_PendingQty + '= ? where ' + billingDetailTable.KEY_OrderId +
            '=? and ' + billingDetailTable.KEY_ItemId + '=?;';

          let updateData = [orderid, item_id, item_code, UnitId, qty, rate, conversion, pendingqty,
            orderid, item_id,];
          return sqlitedb.executeSql(sqlQuery, updateData);
        } else {
          let sqlQuery = 'insert into ' + billingDetailTable.ORDERDETAILS_TABLE + ' (' + billingDetailTable.KEY_OrderId +
            ',' + billingDetailTable.KEY_ItemId + ',' + billingDetailTable.KEY_ItemCode + ',' + billingDetailTable.KEY_UnitId +
            ',' + billingDetailTable.KEY_Qty + ',' + billingDetailTable.KEY_Rate + ',' + billingDetailTable.KEY_Conversion +
            ',' + billingDetailTable.KEY_PendingQty + ') values(?,?,?,?,?,?,?,?);';

          let insertdata = [orderid, item_id, item_code, UnitId, qty, rate, conversion, pendingqty,];

          return sqlitedb.executeSql(sqlQuery, insertdata);
        }

      });
  }

  public checkPlacedOrderId(database: SQLite.SQLiteDatabase, id: number, tablename: string, tablekey: string,): Promise<number> {
    return database
      .executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).OrderId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }

  public checkOrderDetailsId(database: SQLite.SQLiteDatabase, orderid: number, itemid: number, tablename: string, tablekey1: string, tablekey2: string,): Promise<boolean> {
    return database
      .executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey1 + '=' + orderid + ' and ' + tablekey2 + '=' + itemid + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        return false;
      });
  }

  /////////////////------------------------  Get Placed Order Table  --------------------------------------//////////////

  /////////////////------------------------  Get Received Order Table  --------------------------------------//////////////
  public async insertUpdateReceivedOrderData(jsonArray: string) {
    var result = JSON.parse(jsonArray);
    //console.log(result);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        await this.executeReceivedOrder(obj.orderid, obj.userid, obj.customer_id, obj.customername, obj.distributor_id, obj.order_date,
          obj.createdon, obj.nettotal, obj.apiorderno, obj.weborderno, obj.remark, obj.alteredon, obj.brandid,
          obj.cancelstatus, obj.canceldate, obj.cancelremarks, obj.approvedstatus, obj.approveddate, obj.approvedremarks,
          obj.approve_rejectstatus, JSON.stringify(obj.Item));
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executeReceivedOrder(orderid: number, userid: number, customer_id: number, customername: string, distributor_id: number, order_date: string,
    createdon: string, nettotal: string, apiorderno: string, weborderno: string, remark: string, alteredon: string, brandid: string,
    cancelstatus: string, canceldate: string, cancelremarks: string, approvedstatus: string, approveddate: string, approvedremarks: string,
    approve_rejectstatus: String, itemArray: string) {

    const dbVariable: DBVariable = new DBVariable();
    var receivedOrderTable = dbVariable.ReceivedOrderTable;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkRecOrderId(sqlitedb, orderid, receivedOrderTable.RECEIVED_ORDER_TABLE, receivedOrderTable.KEY_OrderId,)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + receivedOrderTable.RECEIVED_ORDER_TABLE + ' set ' + receivedOrderTable.KEY_UserId +
                '= ? ,' + receivedOrderTable.KEY_DistributorId + '= ? ,' + receivedOrderTable.KEY_DistributorCode +
                '= ? ,' + receivedOrderTable.KEY_CustomerId + '= ? ,' + receivedOrderTable.KEY_CustomerName +
                '= ? ,' + receivedOrderTable.KEY_SalesPersonId + '= ? ,' + receivedOrderTable.KEY_SalesPersonName +
                '= ? ,' + receivedOrderTable.KEY_SalesPersonCode + '= ? ,' + receivedOrderTable.KEY_OrderDate +
                '= ? ,' + receivedOrderTable.KEY_AppOrderNo + '= ? ,' + receivedOrderTable.KEY_WebOrderNo +
                '= ? ,' + receivedOrderTable.KEY_CreatedOn + '= ? ,' + receivedOrderTable.KEY_NetTotal +
                '= ? ,' + receivedOrderTable.KEY_UserRemark + '= ? ,' + receivedOrderTable.KEY_BrandId +
                '= ? ,' + receivedOrderTable.KEY_CancelStatus + '= ? ,' + receivedOrderTable.KEY_CancelDate +
                '= ? ,' + receivedOrderTable.KEY_CancelRemark + '= ? ,' + receivedOrderTable.KEY_ApprovedStatus +
                '= ? ,' + receivedOrderTable.KEY_ApprovedDate + '= ? ,' + receivedOrderTable.KEY_ApprovedRemark +
                '= ? ,' + receivedOrderTable.KEY_ApproveRejectStatus + '= ? ,' + receivedOrderTable.KEY_AlteredOn +
                '= ? , where ' + receivedOrderTable.KEY_OrderId + '=?;';

              let updateData = [userid, distributor_id, "", customer_id, customername, 0, "", "", order_date, apiorderno,
                weborderno, createdon, nettotal, remark, brandid, cancelstatus, canceldate, cancelremarks, approvedstatus,
                approveddate, approvedremarks, approve_rejectstatus, alteredon, id,];

              let status = sqlitedb.executeSql(sqlQuery, updateData);
              this.insertUpdateReceivedOrderDetails(sqlitedb, itemArray);
              return status;

            } else {
              //      console.log('Inserting Value');
              let sqlQuery = 'insert into ' + receivedOrderTable.RECEIVED_ORDER_TABLE + ' (' +
                receivedOrderTable.KEY_OrderId + ',' + receivedOrderTable.KEY_UserId +
                ',' + receivedOrderTable.KEY_DistributorId + ',' + receivedOrderTable.KEY_DistributorCode +
                ',' + receivedOrderTable.KEY_CustomerId + ',' + receivedOrderTable.KEY_CustomerName +
                ',' + receivedOrderTable.KEY_SalesPersonId + ',' + receivedOrderTable.KEY_SalesPersonName +
                ',' + receivedOrderTable.KEY_SalesPersonCode + ',' + receivedOrderTable.KEY_OrderDate +
                ',' + receivedOrderTable.KEY_AppOrderNo + ',' + receivedOrderTable.KEY_WebOrderNo +
                ',' + receivedOrderTable.KEY_CreatedOn + ',' + receivedOrderTable.KEY_NetTotal +
                ',' + receivedOrderTable.KEY_UserRemark + ',' + receivedOrderTable.KEY_BrandId +
                ',' + receivedOrderTable.KEY_CancelStatus + ',' + receivedOrderTable.KEY_CancelDate +
                ',' + receivedOrderTable.KEY_CancelRemark + ',' + receivedOrderTable.KEY_ApprovedStatus +
                ',' + receivedOrderTable.KEY_ApprovedDate + ',' + receivedOrderTable.KEY_ApprovedRemark +
                ',' + receivedOrderTable.KEY_ApproveRejectStatus + ',' + receivedOrderTable.KEY_AlteredOn +
                ') values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';

              let insertdata = [orderid, userid, distributor_id, "", customer_id, customername, 0, "", "", order_date, apiorderno,
                weborderno, createdon, nettotal, remark, brandid, cancelstatus, canceldate, cancelremarks, approvedstatus,
                approveddate, approvedremarks, approve_rejectstatus, alteredon,];

              let status = sqlitedb.executeSql(sqlQuery, insertdata);
              this.insertUpdateReceivedOrderDetails(sqlitedb, itemArray);
              return status;
            }
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public async insertUpdateReceivedOrderDetails(sqlitedb: SQLite.SQLiteDatabase, itemArray: string) {
    try {
      var itemArrayList = JSON.parse(itemArray);
      //console.log("Received Order Item Obj :" + itemArrayList[0].orderid);
      for (var i = 0; i < itemArrayList.length; i++) {
        var obj = itemArrayList[i];
        await this.executeReceivedItem(obj.orderid, obj.item_id, obj.item_code, obj.qty, obj.rate,
          obj.amount, obj.UnitId, obj.conversion, obj.pendingqty, sqlitedb);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async executeReceivedItem(orderid: number, item_id: number, item_code: string, qty: string, rate: string,
    amount: string, UnitId: string, conversion: string, pendingqty: string, sqlitedb: SQLite.SQLiteDatabase) {

    const dbVariable: DBVariable = new DBVariable();
    var billingDetailTable = dbVariable.ReceivedOrderDetailsTable;

    await this.checkReceivedOrderDetailsId(sqlitedb, orderid, item_id, billingDetailTable.RECEIVED_ORDER_DETAILS_TABLE, billingDetailTable.KEY_OrderId, billingDetailTable.KEY_ItemId)
      .then((status) => status)
      .then((rowStatus) => {
        let deliveredQty = (parseFloat(qty) - parseFloat(pendingqty))
        if (rowStatus) {
          let sqlQuery = 'update ' + billingDetailTable.RECEIVED_ORDER_DETAILS_TABLE + ' set ' + billingDetailTable.KEY_OrderId +
            '= ? ,' + billingDetailTable.KEY_ItemId + '= ? ,' + billingDetailTable.KEY_ItemCode +
            '= ? ,' + billingDetailTable.KEY_UnitId + '= ? ,' + billingDetailTable.KEY_Qty +
            '= ? ,' + billingDetailTable.KEY_Rate + '= ? ,' + billingDetailTable.KEY_Conversion +
            '= ? ,' + billingDetailTable.KEY_TotalAmount + '= ? ,' + billingDetailTable.KEY_DeliveredQty +
            '= ? ,' + billingDetailTable.KEY_PendingQty + '= ? where ' + billingDetailTable.KEY_OrderId +
            '=? and ' + billingDetailTable.KEY_ItemId + '=?;';

          let updateData = [orderid, item_id, item_code, UnitId, qty, rate, conversion, amount, deliveredQty, pendingqty,
            orderid, item_id,];
          return sqlitedb.executeSql(sqlQuery, updateData);
        } else {
          let sqlQuery = 'insert into ' + billingDetailTable.RECEIVED_ORDER_DETAILS_TABLE + ' (' + billingDetailTable.KEY_OrderId +
            ',' + billingDetailTable.KEY_ItemId + ',' + billingDetailTable.KEY_ItemCode + ',' + billingDetailTable.KEY_UnitId +
            ',' + billingDetailTable.KEY_Qty + ',' + billingDetailTable.KEY_Rate + ',' + billingDetailTable.KEY_Conversion +
            ',' + billingDetailTable.KEY_TotalAmount + ',' + billingDetailTable.KEY_DeliveredQty +
            ',' + billingDetailTable.KEY_PendingQty + ') values(?,?,?,?,?,?,?,?,?,?);';

          let insertdata = [orderid, item_id, item_code, UnitId, qty, rate, conversion, amount, deliveredQty, pendingqty,];

          return sqlitedb.executeSql(sqlQuery, insertdata);
        }

      });
  }

  public checkRecOrderId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database.executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).OrderId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }

  public checkReceivedOrderDetailsId(database: SQLite.SQLiteDatabase, orderid: number, itemid: number, tablename: string, tablekey1: string, tablekey2: string,): Promise<boolean> {
    return database.executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey1 + '=' + orderid + ' and ' + tablekey2 + '=' + itemid + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        return false;
      });
  }

  /////////////////------------------------  Get Received Order Table  --------------------------------------//////////////

  /////////////////------------------------  Get Billing Data Table  --------------------------------------//////////////
  public async insertUpdateBillingData(jsonArray: string) {
    var result = JSON.parse(jsonArray);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        await this.executeBilling(obj.billingmasterid, obj.apiorderno, obj.order_date, obj.orderid, obj.distributor_id, obj.nettotal,
          obj.createdon, obj.userid, obj.customer_id, obj.remark, obj.alteredon, obj.billfromname, obj.brandid, obj.billtoname,
          JSON.stringify(obj.Item));
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executeBilling(billingmasterid: number, apiorderno: string, order_date: string, orderid: number, distributor_id: number, nettotal: string,
    createdon: string, userid: number, customer_id: number, remark: string, alteredon: string, billfromname: string, brandid: string,
    billtoname: string, itemArray: string) {

    const dbVariable: DBVariable = new DBVariable();
    var getBillingTable = dbVariable.BillingTable;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkBillingId(sqlitedb, billingmasterid, getBillingTable.BILLING_TABLE, getBillingTable.KEY_VoucherId,)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + getBillingTable.BILLING_TABLE + ' set ' + getBillingTable.KEY_UserId + '= ? ,' + getBillingTable.KEY_DistributorId + '= ? ,' +
                getBillingTable.KEY_DealerId + '= ? ,' + getBillingTable.KEY_BrandId + '= ? ,' + getBillingTable.KEY_VoucherDate + '= ? ,' +
                getBillingTable.KEY_VoucherNo + '= ? ,' + getBillingTable.KEY_NetTotal + '= ? ,' + getBillingTable.KEY_IsSync + '= ? ,' +
                getBillingTable.KEY_AddedInCart + '= ? ,' + getBillingTable.KEY_OrderId + '= ? ,' + getBillingTable.KEY_BillingType + '= ? ,' +
                getBillingTable.KEY_Remark + '= ? ,' + getBillingTable.KEY_AlteredOn + '= ? where ' + getBillingTable.KEY_VoucherId + '=?;';

              let updateData = [userid, distributor_id, customer_id, brandid, order_date, apiorderno, nettotal, true, false,
                orderid, "", remark, alteredon, id,];
              let status = sqlitedb.executeSql(sqlQuery, updateData);
              this.insertUpdateBillingDetails(sqlitedb, itemArray);
              return status;

            } else {
              let sqlQuery = 'insert into ' + getBillingTable.BILLING_TABLE + ' (' + getBillingTable.KEY_UserId + ',' + getBillingTable.KEY_VoucherId +
                ',' + getBillingTable.KEY_DistributorId + ',' + getBillingTable.KEY_DealerId + ',' + getBillingTable.KEY_BrandId +
                ',' + getBillingTable.KEY_VoucherDate + ',' + getBillingTable.KEY_VoucherNo + ',' + getBillingTable.KEY_NetTotal +
                ',' + getBillingTable.KEY_IsSync + ',' + getBillingTable.KEY_AddedInCart + ',' + getBillingTable.KEY_OrderId +
                ',' + getBillingTable.KEY_BillingType + ',' + getBillingTable.KEY_Remark + ',' + getBillingTable.KEY_AlteredOn +
                ') values(?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
              let insertdata = [userid, billingmasterid, distributor_id, customer_id, brandid, order_date, apiorderno, nettotal, true, false,
                orderid, "", remark, alteredon,];

              let status = sqlitedb.executeSql(sqlQuery, insertdata);
              this.insertUpdateBillingDetails(sqlitedb, itemArray);
              return status;
            }
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public async insertUpdateBillingDetails(sqlitedb: SQLite.SQLiteDatabase, itemArray: string) {
    try {
      var itemArrayList = JSON.parse(itemArray);
      //console.log("Billing Item Obj :" + itemArrayList[0].billingmasterid);
      for (var i = 0; i < itemArrayList.length; i++) {
        var obj = itemArrayList[i];
        await this.executeBillingItem(obj.billingmasterid, obj.item_id, obj.item_code, obj.qty, obj.rate,
          obj.amount, obj.UnitId, obj.conversion, sqlitedb);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async executeBillingItem(voucherid: number, item_id: number, item_code: string, qty: string, rate: string,
    amount: string, UnitId: string, conversion: string, sqlitedb: SQLite.SQLiteDatabase) {
    const dbVariable: DBVariable = new DBVariable();
    var billingDetailTable = dbVariable.BillingDetailsTable;

    await this.checkBillingDetailsId(sqlitedb, voucherid, item_id, billingDetailTable.BILLING_DETAILS_TABLE, billingDetailTable.KEY_VoucherId, billingDetailTable.KEY_ItemId)
      .then((status) => status)
      .then((rowStatus) => {
        if (rowStatus) {
          let sqlQuery = 'update ' + billingDetailTable.BILLING_DETAILS_TABLE + ' set ' + billingDetailTable.KEY_VoucherId +
            '= ? ,' + billingDetailTable.KEY_ItemId + '= ? ,' + billingDetailTable.KEY_ItemCode +
            '= ? ,' + billingDetailTable.KEY_UnitId + '= ? ,' + billingDetailTable.KEY_Qty +
            '= ? ,' + billingDetailTable.KEY_Rate + '= ? ,' + billingDetailTable.KEY_Conversion +
            '= ? where ' + billingDetailTable.KEY_VoucherId + '=? and ' + billingDetailTable.KEY_ItemId + '=?;';

          let updateData = [voucherid, item_id, item_code, UnitId, qty, rate, conversion, voucherid, item_id,];
          return sqlitedb.executeSql(sqlQuery, updateData);
        } else {
          let sqlQuery = 'insert into ' + billingDetailTable.BILLING_DETAILS_TABLE + ' (' + billingDetailTable.KEY_VoucherId +
            ',' + billingDetailTable.KEY_ItemId + ',' + billingDetailTable.KEY_ItemCode + ',' + billingDetailTable.KEY_UnitId +
            ',' + billingDetailTable.KEY_Qty + ',' + billingDetailTable.KEY_Rate + ',' + billingDetailTable.KEY_Conversion +
            ') values(?,?,?,?,?,?,?);';

          let insertdata = [voucherid, item_id, item_code, UnitId, qty, rate, conversion,];
          return sqlitedb.executeSql(sqlQuery, insertdata);
        }
      });
  }

  public checkBillingId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database
      .executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).VoucherId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }

  public checkBillingDetailsId(database: SQLite.SQLiteDatabase, voucherid: number, itemid: number, tablename: string, tablekey1: string, tablekey2: string,): Promise<boolean> {
    return database
      .executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey1 + '=' + voucherid + ' and ' + tablekey2 + '=' + itemid + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        return false;
      });
  }








  /////////////////------------------------  Get Purchase Item Data Table  --------------------------------------//////////////


  public async insertUpdatePurchaseInvoiceData(jsonArray: string) {
    var result = JSON.parse(jsonArray);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        await this.executePurchaseInvoice(obj.billingmasterid, obj.apporderno, obj.orderdate, obj.orderid, obj.distributor_id, obj.nettotal,
          obj.createdon, obj.userid, obj.customer_id, obj.remark, obj.alteredon, obj.billfromname, obj.brandid, obj.billtoname,
          obj.party_bill_no, obj.party_bill_date, obj.distributor_code, JSON.stringify(obj.Item));
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executePurchaseInvoice(billingmasterid: number, apporderno: string, orderdate: string, orderid: number,
    distributor_id: number, nettotal: string, createdon: string, userid: number, customer_id: number, remark: string, alteredon: string,
    billfromname: string, brandid: string, billtoname: string, party_bill_no: string, party_bill_date: string, distributorCode: string,
    itemArray: string) {

    const dbVariable: DBVariable = new DBVariable();
    var getPurchaseInvoice = dbVariable.PurchaseInvoiceTable;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkPurchaseInvoiceId(sqlitedb, billingmasterid, getPurchaseInvoice.PURCHASE_INVOICE_TABLE, getPurchaseInvoice.KEY_BillingMasterId)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + getPurchaseInvoice.PURCHASE_INVOICE_TABLE + ' set ' +
                //  getPurchaseInvoice.KEY_BillingMasterId + '= ? ,' +
                getPurchaseInvoice.KEY_AppOrderNo + '= ? ,' +
                getPurchaseInvoice.KEY_OrderDate + '= ? ,' +
                getPurchaseInvoice.KEY_OrderId + '= ? ,' +
                getPurchaseInvoice.KEY_DistributorId + '= ? ,' +
                getPurchaseInvoice.KEY_NetTotal + '= ? ,' +
                getPurchaseInvoice.KEY_CreatedOn + '= ? ,' +
                getPurchaseInvoice.KEY_UserId + '= ? ,' +
                getPurchaseInvoice.KEY_CustomerId + '= ? ,' +

                getPurchaseInvoice.KEY_Remark + '= ? ,' +
                getPurchaseInvoice.KEY_AlteredOn + '= ? ,' +
                getPurchaseInvoice.KEY_BillFromName + '= ? ,' +
                getPurchaseInvoice.KEY_BrandId + '= ? ,' +
                getPurchaseInvoice.KEY_BillToName + '= ? ,' +
                getPurchaseInvoice.KEY_DistributorCode + '= ? ,' +

                getPurchaseInvoice.KEY_PartyBillNo + '= ? ,' +
                getPurchaseInvoice.KEY_PartyBillDate + '= ? where ' +
                getPurchaseInvoice.KEY_BillingMasterId + '=?;';

              let updateData = [apporderno, orderdate, orderid, distributor_id, nettotal, createdon, userid, customer_id, remark, alteredon,
                billfromname, brandid, billtoname, distributorCode, party_bill_no, party_bill_date, billingmasterid];
              let status = sqlitedb.executeSql(sqlQuery, updateData);
              this.insertUpdatePurchaseInvoiceItem(sqlitedb, itemArray);
              return status;

            } else {
              let sqlQuery = 'insert into ' + getPurchaseInvoice.PURCHASE_INVOICE_TABLE +
                ' (' + getPurchaseInvoice.KEY_BillingMasterId + ','
                + getPurchaseInvoice.KEY_AppOrderNo + ','
                + getPurchaseInvoice.KEY_OrderDate + ','
                + getPurchaseInvoice.KEY_OrderId + ','

                + getPurchaseInvoice.KEY_DistributorId + ','
                + getPurchaseInvoice.KEY_NetTotal + ','
                + getPurchaseInvoice.KEY_CreatedOn + ','
                + getPurchaseInvoice.KEY_UserId + ','
                + getPurchaseInvoice.KEY_CustomerId + ','

                + getPurchaseInvoice.KEY_Remark + ','
                + getPurchaseInvoice.KEY_AlteredOn + ','
                + getPurchaseInvoice.KEY_BillFromName + ','
                + getPurchaseInvoice.KEY_BrandId + ','

                + getPurchaseInvoice.KEY_BillToName + ','
                + getPurchaseInvoice.KEY_DistributorCode + ','
                + getPurchaseInvoice.KEY_PartyBillNo + ','
                + getPurchaseInvoice.KEY_PartyBillDate +
                ') values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
              let insertdata = [billingmasterid, apporderno, orderdate, orderid, distributor_id, nettotal, createdon, userid, customer_id, remark, alteredon, billfromname,
                brandid, billtoname, distributorCode, party_bill_no, party_bill_date];

              let status = sqlitedb.executeSql(sqlQuery, insertdata);
              this.insertUpdatePurchaseInvoiceItem(sqlitedb, itemArray);
              return status;
            }
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public async insertUpdatePurchaseInvoiceItem(sqlitedb: SQLite.SQLiteDatabase, itemArray: string) {
    try {
      var itemArrayList = JSON.parse(itemArray);
      //console.log("Billing Item Obj :" + itemArrayList[0].billingmasterid);
      for (var i = 0; i < itemArrayList.length; i++) {
        var obj = itemArrayList[i];
        console.log('=================================================', obj);

        await this.executePurchaseInvoiceItem(obj.billingmasterid, obj.itemid, obj.item_code, obj.orderqty, obj.rate,
          obj.amount, obj.orderumoid, obj.conversion, sqlitedb);
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async executePurchaseInvoiceItem(billingmasterid: number, itemid: number, item_code: string, qty: string, rate: string,
    amount: string, UnitId: string, conversion: string, sqlitedb: SQLite.SQLiteDatabase) {
    const dbVariable: DBVariable = new DBVariable();
    var getPurchaseInvoiceItem = dbVariable.PurchaseInvoiceItemsTable;

    await this.checkPurchaseInvoiceItemId(sqlitedb, billingmasterid, getPurchaseInvoiceItem.PURCHASE_INVOICE_ITEMS_TABLE,
      getPurchaseInvoiceItem.KEY_BillingMasterId)
      .then((status) => status)
      .then((rowStatus) => {
        if (rowStatus) {
          let sqlQuery = 'update ' + getPurchaseInvoiceItem.PURCHASE_INVOICE_ITEMS_TABLE + ' set '
            //  + getPurchaseInvoiceItem.KEY_OrderId + '= ? ,'
            + getPurchaseInvoiceItem.KEY_ItemId + '= ? ,'
            + getPurchaseInvoiceItem.KEY_ItemCode + '= ? ,'
            + getPurchaseInvoiceItem.KEY_Qty + '= ? ,'
            + getPurchaseInvoiceItem.KEY_Rate + '= ? ,'
            + getPurchaseInvoiceItem.KEY_Amount + '= ? ,'
            + getPurchaseInvoiceItem.KEY_UnitId + '= ? ,'
            + getPurchaseInvoiceItem.KEY_Conversion +
            '= ? where ' + getPurchaseInvoiceItem.KEY_BillingMasterId + '=?;';


          let updateData = [itemid, item_code, qty, rate, amount, UnitId, conversion, billingmasterid];
          return sqlitedb.executeSql(sqlQuery, updateData);
        } else {
          let sqlQuery = 'insert into ' + getPurchaseInvoiceItem.PURCHASE_INVOICE_ITEMS_TABLE + ' ('
            + getPurchaseInvoiceItem.KEY_BillingMasterId + ','
            + getPurchaseInvoiceItem.KEY_ItemId + ','
            + getPurchaseInvoiceItem.KEY_ItemCode + ','
            + getPurchaseInvoiceItem.KEY_Qty + ','
            + getPurchaseInvoiceItem.KEY_Amount + ','

            + getPurchaseInvoiceItem.KEY_Rate + ','
            + getPurchaseInvoiceItem.KEY_UnitId + ','
            + getPurchaseInvoiceItem.KEY_Conversion +
            ') values(?,?,?,?,?,?,?,?);';

          let insertdata = [billingmasterid, itemid, item_code, UnitId, qty, rate, conversion,];
          return sqlitedb.executeSql(sqlQuery, insertdata);
        }
      });
  }

  public checkPurchaseInvoiceId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database
      .executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).OrderId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }

  public checkPurchaseInvoiceItemId(database: SQLite.SQLiteDatabase, billingmasterid: number, tablename: string, tablekey1: string): Promise<boolean> {
    return database
      .executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey1 + '=' + billingmasterid + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        return false;
      });
  }

  /////////////////------------------------  Get Designation  Table  --------------------------------------//////////////
  public async insertUpdateGetDesignationData(jsonArray: string) {
    var result = JSON.parse(jsonArray);
    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];
        await this.executeFunctionGetDesignation(obj.designationid, obj.alteredon, obj.designationcode, obj.designationname, obj.isactive);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private async executeFunctionGetDesignation(designationid: number, alteredon: String, designationcode: String, designationname: String,
    isactive: String,) {

    const dbVariable: DBVariable = new DBVariable();
    var getDesignationTable = dbVariable.DesignationTable;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {
        return this.checkDesignationId(sqlitedb, designationid, getDesignationTable.DESIGNATION_TABLE, getDesignationTable.KEY_DesignationId,)
          .then((id) => id)
          .then((id) => {
            if (id > 0) {
              let sqlQuery = 'update ' + getDesignationTable.DESIGNATION_TABLE + ' set ' + getDesignationTable.KEY_AlteredOn +
                '= ? ,' + getDesignationTable.KEY_DesignationCode + '= ? ,' + getDesignationTable.KEY_DesignationName + '= ? ,' +
                getDesignationTable.KEY_IsActive + '= ? where ' + getDesignationTable.KEY_DesignationId + '=?;';

              let updateData = [alteredon, designationcode, designationname, isactive, id];
              return sqlitedb.executeSql(sqlQuery, updateData);

            } else {
              let sqlQuery = 'insert into ' + getDesignationTable.DESIGNATION_TABLE + ' (' + getDesignationTable.KEY_DesignationId +
                ',' + getDesignationTable.KEY_AlteredOn + ',' + getDesignationTable.KEY_DesignationCode + ',' + getDesignationTable.KEY_DesignationName +
                ',' + getDesignationTable.KEY_IsActive + ') values(?,?,?,?,?);';

              let insertdata = [designationid, alteredon, designationcode, designationname, isactive];

              return sqlitedb.executeSql(sqlQuery, insertdata);
            }
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  public checkDesignationId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
    return database.executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return results.rows.item(0).DesignationId;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        return 0;
      });
  }














  /////////////////------------------------  Get Designation  Table  --------------------------------------//////////////

  /////////////////------------------------  Get Distribution Division Tagging Table  --------------------------------------//////////////
  // public async insertUpdateGetDistributionDivisionTagging(jsonArray: string) {
  //   var result = JSON.parse(jsonArray);
  //   try {
  //     for (var i = 0; i < result.length; i++) {
  //       var obj = result[i];
  //       await this.executeFunctionGetDistributionDivisionTagging(obj.taggingid, obj.alteredon, obj.brandid, obj.divisionid, obj.isactive, obj.userid);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // private async executeFunctionGetDistributionDivisionTagging(taggingid: number, alteredon: String, brandid: String, divisionid: String,
  //   isactive: String, userid: String,) {

  //   const dbVariable: DBVariable = new DBVariable();
  //   var divisionTaggingTable = dbVariable.DistributorDivisionTable;

  //   return await this.getDatabase()
  //     .then((db) => db)
  //     .then((sqlitedb) => {
  //       return this.checkDivisionTaggId(sqlitedb, taggingid, divisionTaggingTable.DIST_DIVISION_TABLE, divisionTaggingTable.KEY_TaggingId,)
  //         .then((id) => id)
  //         .then((id) => {
  //           if (id > 0) {
  //             let sqlQuery = 'update ' + divisionTaggingTable.DIST_DIVISION_TABLE + ' set ' + divisionTaggingTable.KEY_AlteredOn +
  //               '= ? ,' + divisionTaggingTable.KEY_BrandId + '= ? ,' + divisionTaggingTable.KEY_DivisionId + '= ? ,' + divisionTaggingTable.KEY_IsActive +
  //               '= ? ,' + divisionTaggingTable.KEY_UserId + '= ? where ' + divisionTaggingTable.KEY_TaggingId + '=?;';

  //             let updateData = [alteredon, brandid, divisionid, isactive, userid, id];
  //             return sqlitedb.executeSql(sqlQuery, updateData);

  //           } else {
  //             let sqlQuery = 'insert into ' + divisionTaggingTable.DIST_DIVISION_TABLE + ' (' + divisionTaggingTable.KEY_TaggingId +
  //               ',' + divisionTaggingTable.KEY_AlteredOn + ',' + divisionTaggingTable.KEY_BrandId + ',' + divisionTaggingTable.KEY_DivisionId +
  //               ',' + divisionTaggingTable.KEY_IsActive + ',' + divisionTaggingTable.KEY_UserId + ') values(?,?,?,?,?,?);';
  //             let insertdata = [taggingid, alteredon, brandid, divisionid, isactive, userid];

  //             return sqlitedb.executeSql(sqlQuery, insertdata);
  //           }
  //         });
  //     })
  //     .catch((errorMsg) => {
  //       console.log(errorMsg);
  //     });
  // }

  // public checkDivisionTaggId(database: SQLite.SQLiteDatabase, id: number, tablename: String, tablekey: String,): Promise<number> {
  //   return database.executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + id + ';',)
  //     .then(([results]) => {
  //       if (results.rows && results.rows.length > 0) {
  //         return results.rows.item(0).TaggingId;
  //       } else {
  //         return 0;
  //       }
  //     })
  //     .catch((error) => {
  //       return 0;
  //     });
  // }























  /////////////////------------------------  Get Distribution Division Tagging  Table  --------------------------------------//////////////

  public async getAlterOn(tablename: String, tablekey: String,): Promise<string> {
    console.log("\n Table Name For AlteredOn : " + tablename + "\nKey : " + tablekey)
    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        const value = sqlitedb.executeSql("select coalesce(max(" + tablekey + "),'1901-01-01 00:00:00') as alteron from " + tablename)
          .then(([results]) => {
            if (results.rows && results.rows.length > 0) {
              console.log(results.rows.item(0).alteron);
              return results.rows.item(0).alteron;
            } else {
              return "1901-01-01 00:00:00";
            }
          })
          .catch((error) => {
            console.log(error)
            return "1901-01-01 00:00:00";
          });
        return value;
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
        return "1901-01-01 00:00:00";
      });
  }








  //################################################# Data Fetching ###################################################////

  //-------------------------------------------------  Distributor Data  -------------------------------------//

  public async getDistributorData(tableName: String, brandid: String, Offset: String) {

    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        const value = sqlitedb.executeSql('SELECT * FROM (' + tableName + ') where BrandId = (' + brandid + ') and IsActive=1 ' + Offset)
          .then(([results]) => {

            let row;
            //  const lists: List[] = [];
            const lists = [];
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);

              console.log(row);
              const { Address, AlteredOn, BrandId, CityCode, CityId, CityName, DistributorCode, DistributorEmail, DistributorId, DistributorMobile, DistributorName, IsActive, MappingId, PaytmMobileNo, StateCode, StateId, StateName, UPIId, _id } = row;
              lists.push({ Address, AlteredOn, BrandId, CityCode, CityId, CityName, DistributorCode, DistributorEmail, DistributorId, DistributorMobile, DistributorName, IsActive, MappingId, PaytmMobileNo, StateCode, StateId, StateName, UPIId, _id });

              // console.log('LISTTTTTTTTTTTTTTTTTTTTTTTT', lists);
            }
            return lists;

          })
          .catch((error) => {
            console.log(error)
          });
        return value;
      })
      .catch((errorMsg) => {
        console.log(errorMsg)

      });
  }



  public async getFilteredDistributorData(searchKey: String, searchType: String, brandid: String, Offset: number) {

    const dbVariable: DBVariable = new DBVariable();
    const itemMaster = dbVariable.ItemsMaster;
    const unitMaster = dbVariable.UnitMaster;
    const itemGroupMaster = dbVariable.ItemGroupMaster;
    const orderDetail = dbVariable.OrderDetailsTable;

    const itemTableName = itemMaster.ITEMS_TABLE;
    const unitTableName = unitMaster.UNITMASTER_MASTER;
    const itemGroupTableName = itemGroupMaster.ITEM_GROUP_TABLE;
    const orderDetailTableName = orderDetail.ORDERDETAILS_TABLE;

    // var offset = "";
    // if (pageNo > 0) {
    //   offset = " LIMIT 30  OFFSET " + ((pageNo - 1) * 30).toString()
    // }

    var wherecondition = "";

    if (searchType == ('DistributorName')) {
      wherecondition =
        " where BrandId = " + brandid + " and IsActive=1 and DistributorName like '%" + searchKey + "%'"
    } else if (searchType == ('DistributorCode')) {
      wherecondition =
        " where BrandId = " + brandid + " and IsActive=1 and DistributorCode like '%" + searchKey + "%'"
    }

    console.log('@@@@@@@@@@@@@@@@@@', wherecondition);

    const sqlQuery = 'SELECT * FROM DistributorMaster ' + wherecondition


    console.log(sqlQuery);


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {

            let row;
            //  const lists: List[] = [];
            const lists = [];
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);

              console.log(row);
              const { Address, AlteredOn, BrandId, CityCode, CityId, CityName, DistributorCode, DistributorEmail, DistributorId, DistributorMobile, DistributorName, IsActive, MappingId, PaytmMobileNo, StateCode, StateId, StateName, UPIId, _id } = row;
              lists.push({ Address, AlteredOn, BrandId, CityCode, CityId, CityName, DistributorCode, DistributorEmail, DistributorId, DistributorMobile, DistributorName, IsActive, MappingId, PaytmMobileNo, StateCode, StateId, StateName, UPIId, _id });

              // console.log('LISTTTTTTTTTTTTTTTTTTTTTTTT', lists);
            }
            return lists;

          })
          .catch((error) => {
            console.log(error)
          });
        //  return value;
      })
      .catch((errorMsg) => {
        console.log(errorMsg)

      });
  }


  //-------------------------------------------------  Stock Item Data  -------------------------------------------//

  public async getStockItemData(orderId: number, brandid: String, pageNo: number) {

    const dbVariable: DBVariable = new DBVariable();
    const itemMaster = dbVariable.ItemsMaster;
    const unitMaster = dbVariable.UnitMaster;
    const itemGroupMaster = dbVariable.ItemGroupMaster;
    const orderDetail = dbVariable.OrderDetailsTable;

    const itemTableName = itemMaster.ITEMS_TABLE;
    const unitTableName = unitMaster.UNITMASTER_MASTER;
    const itemGroupTableName = itemGroupMaster.ITEM_GROUP_TABLE;
    const orderDetailTableName = orderDetail.ORDERDETAILS_TABLE;

    var offset = "";
    if (pageNo > 0) {
      offset = " LIMIT 10  OFFSET " + ((pageNo - 1) * 10).toString()
    }


    const sqlQuery = "select " + itemTableName + ".*, coalesce(" + itemTableName + "." + itemMaster.KEY_ItemRates + ",'0') as ItemsRates, " +
      "coalesce(u1." + unitMaster.KEY_UnitName + ",'null') as Unit, coalesce(u1." + unitMaster.KEY_UnitSymbol + ",'null') as UnitSymbol, " +
      "coalesce( " + itemGroupTableName + "." + itemGroupMaster.KEY_GroupName + ",'null') as GroupName," +
      " coalesce(u2." + unitMaster.KEY_UnitName + ",'null') as AltUnit,  coalesce((select " + orderDetailTableName + "." + orderDetail.KEY_Qty + " from " + orderDetailTableName + " where " +
      " " + orderDetail.KEY_OrderId + " = " + orderId + " and " + itemTableName + "." + itemMaster.KEY_ItemId + " = " + orderDetail.KEY_ItemId + "),'') as Qty,  coalesce((select " + orderDetail.KEY_UnitId + " " +
      "from " + orderDetailTableName + " where " + orderDetail.KEY_OrderId + " = " + orderId + " and " + itemMaster.KEY_ItemId + " = " + orderDetail.KEY_ItemId + "),'0') as unitid, " +
      " coalesce((select (CASE WHEN (select coalesce(" + orderDetail.KEY_UnitId + ",'0') from " + orderDetailTableName + " where " + orderDetail.KEY_OrderId + " = " + orderId + " " +
      "and " + itemMaster.KEY_ItemId + " = " + orderDetail.KEY_ItemId + ")  != 0 THEN (CASE WHEN (select coalesce(" + orderDetail.KEY_UnitId + ",'0') " +
      " from " + orderDetailTableName + " where " + orderDetail.KEY_OrderId + " = " + orderId + " and " + itemMaster.KEY_ItemId + " = " + orderDetail.KEY_ItemId + ")  == " + itemMaster.KEY_UMOId +
      " THEN 'BaseUnit' ELSE 'AltUnit' END) ELSE (CASE WHEN 'Base Unit' == 'Base Unit'  THEN (CASE WHEN " + itemMaster.KEY_UMOId + " > 0 " +
      " THEN 'BaseUnit' ELSE 'AltUnit' END) ELSE (CASE WHEN " + itemTableName + ".AltUOMId > 0  THEN 'AltUnit' ELSE 'BaseUnit' END) END)  END)" +
      " FROM " + orderDetailTableName + "), '')  as unitname  from " + itemTableName +
      " left join " + unitTableName + " as u1 on u1.UnitId=" + itemMaster.KEY_UMOId +
      " left join  " + unitTableName + " as u2 on u2.UnitId=" + itemMaster.KEY_AltUOMId +
      " left join " + itemGroupTableName + " on " + itemGroupMaster.KEY_ItemGroupId + "= " + itemMaster.KEY_GroupId +
      " where " + itemTableName + ".BrandId=" + brandid + " and u1.BrandId=" + brandid + " and u2.BrandId= " + brandid
      + " and " + itemTableName + ".IsActive=1  order by " + itemMaster.KEY_ItemName + " ASC  " + offset;


    console.log(sqlQuery);


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {
            let row;
            console.log(results.rows.item(0));

            //const lists: List[] = [];
            const lists = [];
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);

              //  console.log(row);
              const { AltUOM, AltUOMId, AltUnit, AlteredOn, BrandId, CityName, Conversion, Denominator, DivisionId, GroupId, GroupName,
                IsActive, IsBatchEnable, IsSerialEnable, ItemCode, ItemId, ItemName, ItemsRates, NoOfDecimalPlaces, PTR, Qty,
                UMO, UMOId, Unit, UnitSymbol, _id, unitid, unitname } = row;

              lists.push({
                AltUOM, AltUOMId, AltUnit, AlteredOn, BrandId, CityName, Conversion, Denominator, DivisionId, GroupId, GroupName,
                IsActive, IsBatchEnable, IsSerialEnable, ItemCode, ItemId, ItemName, ItemsRates, NoOfDecimalPlaces, PTR, Qty,

                UMO, UMOId, Unit, UnitSymbol, _id, unitid, unitname
              });

              //   console.log('LISTTTTTTTTTTTTTTTTTTTTTTTT', lists);
            }
            return lists;

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }


  public async updateData(cart: String) {


    var arrayLength = cart.length;
    for (var i = 0; i < arrayLength; i++) {
      console.log(cart[i]);
      //Do something
    }

    // const dbVariable: DBVariable = new DBVariable();
    // const itemMaster = dbVariable.ItemsMaster;
    // const unitMaster = dbVariable.UnitMaster;
    // const itemGroupMaster = dbVariable.ItemGroupMaster;
    // const orderDetail = dbVariable.OrderDetailsTable;

    // const itemTableName = itemMaster.ITEMS_TABLE;
    // const unitTableName = unitMaster.UNITMASTER_MASTER;
    // const itemGroupTableName = itemGroupMaster.ITEM_GROUP_TABLE;
    // const orderDetailTableName = orderDetail.ORDERDETAILS_TABLE;




    // const sqlQuery = '';
    // // console.log(sqlQuery);


    // return await this.getDatabase().then((db) => db)
    //   .then((sqlitedb) => {
    //     return sqlitedb.executeSql(sqlQuery)
    //       .then(([results]) => {
    //         let row;
    //         //const lists: List[] = [];
    //         const lists = [];
    //         for (let i = 0; i < results.rows.length; i++) {
    //           row = results.rows.item(i);

    //           // console.log(row);
    //           const { AltUOM, AltUOMId, AltUnit, AlteredOn, BrandId, CityName, Conversion, Denominator, DivisionId, GroupId, GroupName,
    //             IsActive, IsBatchEnable, IsSerialEnable, ItemCode, ItemId, ItemName, ItemsRates, NoOfDecimalPlaces, PTR, Qty,
    //             UMO, UMOId, Unit, UnitSymbol, _id, unitid, unitname } = row;

    //           lists.push({
    //             AltUOM, AltUOMId, AltUnit, AlteredOn, BrandId, CityName, Conversion, Denominator, DivisionId, GroupId, GroupName,
    //             IsActive, IsBatchEnable, IsSerialEnable, ItemCode, ItemId, ItemName, ItemsRates, NoOfDecimalPlaces, PTR, Qty,

    //             UMO, UMOId, Unit, UnitSymbol, _id, unitid, unitname
    //           });

    //           //   console.log('LISTTTTTTTTTTTTTTTTTTTTTTTT', lists);
    //         }
    //         return lists;

    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       });
    //   })
    //   .catch((errorMsg) => {
    //     console.log(errorMsg)
    //   });
  }


  public async getLastFiveOrder(brandid: String) {
    const dbVariable: DBVariable = new DBVariable();

    const orderTable = dbVariable.OrderTable;
    const distributorTable = dbVariable.DistributorMaster;




    const sqlQuery = "select A.*, " +
      "coalesce(C." + distributorTable.KEY_DistributorName + ",'null') as DistributorName from " + orderTable.ORDER_TABLE + " as A " +
      "left join " + distributorTable.DISTRIBUTOR_TABLE + " as C on A." + orderTable.KEY_DistributorId + " = C." +
      distributorTable.KEY_DistributorId + " where A." + orderTable.KEY_BrandId + " = " + brandid
      + " ORDER BY substr(A." + orderTable.KEY_AppOrderNo + ",5) DESC LIMIT 5"


    //  console.log(sqlQuery);



    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {
            let row;
            //const lists: List[] = [];
            const lists = [];
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);

              //    console.log(row);
              const { AddedInCart, AlteredOn, AppOrderNo, ApproveRejectStatus, ApprovedDate, ApprovedRemark,
                ApprovedStatus, BrandId, CancelDate, CancelRemark, CancelStatus, CreatedOn, DistributorCode, DistributorId,
                DistributorName, IsSync, NetTotal, OrderDate, OrderId, UserId, UserRemark, WebOrderNo, _id } = row;

              lists.push({
                AddedInCart, AlteredOn, AppOrderNo, ApproveRejectStatus, ApprovedDate, ApprovedRemark,
                ApprovedStatus, BrandId, CancelDate, CancelRemark, CancelStatus, CreatedOn, DistributorCode, DistributorId,
                DistributorName, IsSync, NetTotal, OrderDate, OrderId, UserId, UserRemark, WebOrderNo, _id
              });

              //   console.log('LISTTTTTTTTTTTTTTTTTTTTTTTT', lists);
            }
            return lists;

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });


  }

  ////////-----------------------------------   Prev Order detail --------------------------//

  public async getCopyOrderDetail(orderid: String) {
    const dbVariable: DBVariable = new DBVariable();

    const orderTable = dbVariable.OrderTable;
    const distributorTable = dbVariable.DistributorMaster;

    const sqlQuery = "Select * FROM OrderDetails where OrderId=" + orderid

    console.log(sqlQuery);



    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {
            let row;
            //const lists: List[] = [];
            const lists = [];
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);

              // console.log(row);
              const { Conversion, ItemCode, ItemId, OrderId, PendingQty, Qty, Rate, UnitId, _id } = row;

              lists.push({ Conversion, ItemCode, ItemId, OrderId, PendingQty, Qty, Rate, UnitId, _id });

              // console.log('LISTTTTTTTTTTTTTTTTTTTTTTTT', lists);
            }
            return row;

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });


  }


  public async getFilteredData(searchKey: String, searchType: String, orderId: String, brandid: String, pageNo: number) {

    const dbVariable: DBVariable = new DBVariable();
    const itemMaster = dbVariable.ItemsMaster;
    const unitMaster = dbVariable.UnitMaster;
    const itemGroupMaster = dbVariable.ItemGroupMaster;
    const orderDetail = dbVariable.OrderDetailsTable;

    const itemTableName = itemMaster.ITEMS_TABLE;
    const unitTableName = unitMaster.UNITMASTER_MASTER;
    const itemGroupTableName = itemGroupMaster.ITEM_GROUP_TABLE;
    const orderDetailTableName = orderDetail.ORDERDETAILS_TABLE;

    // var offset = "";
    // if (pageNo > 0) {
    //   offset = " LIMIT 30  OFFSET " + ((pageNo - 1) * 30).toString()
    // }

    var wherecondition = "";

    if (searchType == (appConstant.AllStockSearch)) {
      wherecondition =
        " where " + itemMaster.ITEMS_TABLE + "." + itemMaster.KEY_BrandId + "= " + brandid + " and  " + itemMaster.ITEMS_TABLE + "." + itemMaster.KEY_IsActive + "=1 "
    } else if (searchType == (appConstant.StockSearchByName)) {
      wherecondition =
        " where " + itemMaster.ITEMS_TABLE + "." + itemMaster.KEY_BrandId + " = " + brandid + " and  " + itemMaster.ITEMS_TABLE + "."
        + itemMaster.KEY_IsActive + " = 1 and " + itemMaster.ITEMS_TABLE + "." + itemMaster.KEY_ItemName + " like '%" + searchKey + "%'"

    } else if (searchType == (appConstant.StockSearchByGroup)) {
      wherecondition =
        " where " + itemMaster.ITEMS_TABLE + "." + itemMaster.KEY_BrandId + "= " + brandid + " and  " + itemMaster.ITEMS_TABLE + "."
        + itemMaster.KEY_IsActive + "=1 and " + itemGroupMaster.ITEM_GROUP_TABLE + "." + itemGroupMaster.KEY_GroupName + " like '%" + searchKey + "%'"
    } else if (searchType == (appConstant.StockSearchByItemCode)) {
      wherecondition =
        " where " + itemMaster.ITEMS_TABLE + "." + itemMaster.KEY_BrandId + " = " + brandid + " and  " + itemMaster.ITEMS_TABLE + "."
        + itemMaster.KEY_IsActive + " = 1 and " + itemMaster.ITEMS_TABLE + "." + itemMaster.KEY_ItemCode + " like '%" + searchKey + "%'"
    }

    console.log('@@@@@@@@@@@@@@@@@@', wherecondition);

    const sqlQuery = "select " + itemTableName + ".*, coalesce(" + itemTableName + "." + itemMaster.KEY_ItemRates + ",'0') as ItemsRates, " +
      "coalesce(u1." + unitMaster.KEY_UnitName + ",'null') as Unit, coalesce(u1." + unitMaster.KEY_UnitSymbol + ",'null') as UnitSymbol, " +
      "coalesce( " + itemGroupTableName + "." + itemGroupMaster.KEY_GroupName + ",'null') as GroupName," +
      " coalesce(u2." + unitMaster.KEY_UnitName + ",'null') as AltUnit,  coalesce((select " + orderDetailTableName + "." + orderDetail.KEY_Qty + " from " + orderDetailTableName + " where " +
      " " + orderDetail.KEY_OrderId + " = 0 and " + itemTableName + "." + itemMaster.KEY_ItemId + " = " + orderDetail.KEY_ItemId + "),'') as Qty,  coalesce((select " + orderDetail.KEY_UnitId + " " +
      "from " + orderDetailTableName + " where " + orderDetail.KEY_OrderId + " = 0 and " + itemMaster.KEY_ItemId + " = " + orderDetail.KEY_ItemId + "),'0') as unitid, " +
      " coalesce((select (CASE WHEN (select coalesce(" + orderDetail.KEY_UnitId + ",'0') from " + orderDetailTableName + " where " + orderDetail.KEY_OrderId + " = 0 " +
      "and " + itemMaster.KEY_ItemId + " = " + orderDetail.KEY_ItemId + ")  != 0 THEN (CASE WHEN (select coalesce(" + orderDetail.KEY_UnitId + ",'0') " +
      " from " + orderDetailTableName + " where " + orderDetail.KEY_OrderId + " = 0 and " + itemMaster.KEY_ItemId + " = " + orderDetail.KEY_ItemId + ")  == " + itemMaster.KEY_UMOId +
      " THEN 'BaseUnit' ELSE 'AltUnit' END) ELSE (CASE WHEN 'Base Unit' == 'Base Unit'  THEN (CASE WHEN " + itemMaster.KEY_UMOId + " > 0 " +
      " THEN 'BaseUnit' ELSE 'AltUnit' END) ELSE (CASE WHEN " + itemTableName + ".AltUOMId > 0  THEN 'AltUnit' ELSE 'BaseUnit' END) END)  END)" +
      " FROM " + orderDetailTableName + "), '')  as unitname  from " + itemTableName +
      " left join " + unitTableName + " as u1 on u1.UnitId=" + itemMaster.KEY_UMOId +
      " left join  " + unitTableName + " as u2 on u2.UnitId=" + itemMaster.KEY_AltUOMId +
      " left join " + itemGroupTableName + " on " + itemGroupMaster.KEY_ItemGroupId + "= " + itemMaster.KEY_GroupId + wherecondition


    console.log(sqlQuery);


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {
            let row;
            //const lists: List[] = [];
            const lists = [];
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);

              //      console.log(row);
              const { AltUOM, AltUOMId, AltUnit, AlteredOn, BrandId, CityName, Conversion, Denominator, DivisionId, GroupId, GroupName,
                IsActive, IsBatchEnable, IsSerialEnable, ItemCode, ItemId, ItemName, ItemsRates, NoOfDecimalPlaces, PTR, Qty,
                UMO, UMOId, Unit, UnitSymbol, _id, unitid, unitname } = row;

              lists.push({
                AltUOM, AltUOMId, AltUnit, AlteredOn, BrandId, CityName, Conversion, Denominator, DivisionId, GroupId, GroupName,
                IsActive, IsBatchEnable, IsSerialEnable, ItemCode, ItemId, ItemName, ItemsRates, NoOfDecimalPlaces, PTR, Qty,

                UMO, UMOId, Unit, UnitSymbol, _id, unitid, unitname
              });

              //      console.log('LISTTTTTTTTTTTTTTTTTTTTTTTT', lists);
            }
            return lists;

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }







  //-------------------------------------------------  Stock Item Data  -------------------------------------------//



  //-------------------------------------------------  BRAND LIST  -------------------------------------------//

  public async getBrand() {

    const dbVariable: DBVariable = new DBVariable();
    const itemMaster = dbVariable.ItemsMaster;
    const unitMaster = dbVariable.UnitMaster;
    const itemGroupMaster = dbVariable.ItemGroupMaster;
    const orderDetail = dbVariable.OrderDetailsTable;

    const itemTableName = itemMaster.ITEMS_TABLE;
    const unitTableName = unitMaster.UNITMASTER_MASTER;
    const itemGroupTableName = itemGroupMaster.ITEM_GROUP_TABLE;
    const orderDetailTableName = orderDetail.ORDERDETAILS_TABLE;

    var offset = "";



    const sqlQuery = "SELECT * FROM BrandTable";


    // console.log(sqlQuery);


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {
            let row;
            //const lists: List[] = [];
            const lists = [];
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);

              // console.log(row);
              const { BrandId, BrandName, IsActive, DesignationName, AlteredOn } = row;

              lists.push({ BrandId, BrandName, IsActive, DesignationName, AlteredOn });

              //   console.log('LISTTTTTTTTTTTTTTTTTTTTTTTT', lists);
            }
            return lists;

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }



  //-------------------------------------------------  BRAND LIST  -------------------------------------------//


  /// ----------------------------------- INSERT DATA INTO CART  ----------------------------------/////


  public async updateCart(jsonArray: string) {
    var result = JSON.parse(jsonArray);

    try {
      for (var i = 0; i < result.length; i++) {
        var obj = result[i];

        //   console.log(obj)
        await this.executeInCart(obj.userid, obj.customer_id, obj.distributor_id, obj.distributor_code, obj.order_date, obj.createdon,
          obj.nettotal, obj.brandid, obj.orderId, obj.alteredon, obj.is_sync, obj.appOrderNumber, obj.weborder_no, obj.addedincart,
          obj.remark, obj.itemId, obj.itemCode, obj.qty, obj.conversion, obj.altUMOId, obj.latitude, obj.longitude, obj.rate);
      }
    } catch (error) {
      console.log(error);
    }
  }


  private async executeInCart(userid: number, customer_id: number, distributor_id: number, distributor_code: string, order_date: string,
    createdon: string, nettotal: string, brandid: number, orderId: number, alteredon: string, is_sync: string,
    apiorderno: string, weborderno: string, addedincart: string, remark: string, itemId: string, itemCode: string,
    qty: string, conversion: string, altUMOId: string, latitude: string, longitude: string, rate: string) {

    const dbVariable: DBVariable = new DBVariable();
    var getPlacedOrderTable = dbVariable.OrderTable;

    return await this.getDatabase()
      .then((db) => db)
      .then((sqlitedb) => {

        let sqlQuery = 'insert into ' + getPlacedOrderTable.ORDER_TABLE + ' (' + getPlacedOrderTable.KEY_OrderId +
          ',' + getPlacedOrderTable.KEY_UserId +
          ',' + getPlacedOrderTable.KEY_DistributorId + ',' + getPlacedOrderTable.KEY_DistributorCode +
          ',' + getPlacedOrderTable.KEY_OrderDate + ',' + getPlacedOrderTable.KEY_CreatedOn +
          ',' + getPlacedOrderTable.KEY_NetTotal + ',' + getPlacedOrderTable.KEY_BrandId +
          ',' + getPlacedOrderTable.KEY_AlteredOn + ',' + getPlacedOrderTable.KEY_IsSync +
          ',' + getPlacedOrderTable.KEY_AppOrderNo + ',' + getPlacedOrderTable.KEY_WebOrderNo +
          ',' + getPlacedOrderTable.KEY_AddedInCart + ',' + getPlacedOrderTable.KEY_UserRemark +
          ',' + getPlacedOrderTable.KEY_Latitude + ',' + getPlacedOrderTable.KEY_Longitude +
          ') values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';

        let insertdata = [orderId, userid, distributor_id, distributor_code, order_date, createdon,
          nettotal, brandid, alteredon, is_sync, apiorderno, weborderno, addedincart, remark, latitude, longitude];

        let status = sqlitedb.executeSql(sqlQuery, insertdata);
        this.updateCartDetail(orderId, itemId, itemCode, qty, conversion, altUMOId, rate, sqlitedb);
        return status;
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }



  /////////////////////////////////////





  public async updateCartDetail(orderId: number, itemId: string, itemCode: string, qty: string, conversion: string,
    altUMOId: string, rate: string, sqlitedb: SQLite.SQLiteDatabase) {

    const dbVariable: DBVariable = new DBVariable();
    var getPlacedOrderTable = dbVariable.OrderDetailsTable;

    // return await this.getDatabase()
    //   .then((db) => db)
    //   .then((sqlitedb) => {

    //     let sqlQuery = 'insert into ' + getPlacedOrderTable.ORDERDETAILS_TABLE +
    //       ' (' + getPlacedOrderTable.KEY_OrderId +
    //       ',' + getPlacedOrderTable.KEY_ItemId +
    //       ',' + getPlacedOrderTable.KEY_ItemCode +
    //       ',' + getPlacedOrderTable.KEY_Qty +
    //       ',' + getPlacedOrderTable.KEY_Rate +
    //       ',' + getPlacedOrderTable.KEY_Conversion +
    //       ',' + getPlacedOrderTable.KEY_UnitId +
    //       ') values(?,?,?,?,?,?,?);';

    //     let insertdata = [orderId, itemId, itemCode, qty, rate, conversion, altUMOId];

    //     let status = sqlitedb.executeSql(sqlQuery, insertdata);

    //     return status;

    //   })
    //   .catch((errorMsg) => {
    //     console.log(errorMsg);
    //   });


    await this.cartItemId(sqlitedb, itemId, getPlacedOrderTable.ORDERDETAILS_TABLE, getPlacedOrderTable.KEY_ItemId)
      .then((status) => status)
      .then((rowStatus) => {
        if (rowStatus) {
          let sqlQuery = 'update ' + getPlacedOrderTable.ORDERDETAILS_TABLE + ' set ' +
            getPlacedOrderTable.KEY_OrderId + '= ? ,' +
            getPlacedOrderTable.KEY_ItemCode + '= ? ,' +
            getPlacedOrderTable.KEY_Qty + '= ? ,' +
            getPlacedOrderTable.KEY_Rate + '= ? ,' +
            getPlacedOrderTable.KEY_Conversion + '=? ,' +
            getPlacedOrderTable.KEY_UnitId +
            '= ? where ' + getPlacedOrderTable.KEY_ItemId + '=? ';

          let updateData = [orderId, itemCode, qty, rate, conversion, altUMOId, itemId];
          return sqlitedb.executeSql(sqlQuery, updateData);
        } else {
          let sqlQuery = 'insert into ' + getPlacedOrderTable.ORDERDETAILS_TABLE + ' ('
            + getPlacedOrderTable.KEY_ItemId + ','
            + getPlacedOrderTable.KEY_OrderId + ','
            + getPlacedOrderTable.KEY_ItemCode + ','
            + getPlacedOrderTable.KEY_Qty + ','
            + getPlacedOrderTable.KEY_Rate + ','
            + getPlacedOrderTable.KEY_Conversion + ','
            + getPlacedOrderTable.KEY_UnitId +

            ') values(?,?,?,?,?,?,?);';

          let insertdata = [itemId, orderId, itemCode, qty, rate, conversion, altUMOId];
          return sqlitedb.executeSql(sqlQuery, insertdata);
        }
      });

  }



  public cartItemId(database: SQLite.SQLiteDatabase, itemid: string, tablename: string, tablekey: string): Promise<boolean> {
    return database
      .executeSql('SELECT * FROM ' + tablename + ' where ' + tablekey + '=' + itemid + ';',)
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        return false;
      });
  }





  /////////----------------------------- get Cart Data --------------------------------------/////


  public async getOrderTableData(orderId: string) {

    const dbVariable: DBVariable = new DBVariable();
    const distributorMaster = dbVariable.DistributorMaster;
    const orderMaster = dbVariable.OrderTable;

    const sqlQuery = "select A.*, " +
      "coalesce(C." + distributorMaster.KEY_DistributorName + ",'null') as DistributorName from " + orderMaster.ORDER_TABLE + " as A " +
      "left join " + distributorMaster.DISTRIBUTOR_TABLE + " as C on A." + orderMaster.KEY_DistributorId +
      " = C." + distributorMaster.KEY_DistributorId + " where A." + orderMaster.KEY_OrderId + "=" + orderId;


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {
            let row;
            const lists = [];
            // for (let i = 0; i < results.rows.length; i++) {
            row = results.rows.item(0);

            const { UserId, OrderId, DistributorId, DistributorCode, OrderDate, AppOrderNo, WebOrderNo, CreatedOn, NetTotal, BrandId, AlteredOn } = row;
            lists.push({ UserId, OrderId, DistributorId, DistributorCode, OrderDate, AppOrderNo, WebOrderNo, CreatedOn, NetTotal, BrandId, AlteredOn });
            // }
            return lists;

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }


  public async getOrderTableDetailData(orderId: string) {

    const dbVariable: DBVariable = new DBVariable();
    const orderDetailsTbl = dbVariable.OrderDetailsTable;
    const itemsMaster = dbVariable.ItemsMaster;
    const unitMaster = dbVariable.UnitMaster;

    const sqlQuery = "select OD.*, coalesce(IM." + itemsMaster.KEY_ItemName + ",'null') as ItemName , " +
      "coalesce(UM." + unitMaster.KEY_UnitSymbol + ",'null') as ItemUnit, IM." + itemsMaster.KEY_UMO + ", " +
      "((select CASE WHEN COALESCE(IM." + itemsMaster.KEY_UMOId + ",0) = OD." + orderDetailsTbl.KEY_UnitId + " " +
      "THEN  cast(OD." + orderDetailsTbl.KEY_Qty + " as Double) ELSE (cast(OD." + orderDetailsTbl.KEY_Qty + " as Double) * " +
      "cast(COALESCE(IM." + itemsMaster.KEY_Conversion + ",1) as Double))/COALESCE(IM." + itemsMaster.KEY_Denominator + ",1) END " +
      "from " + itemsMaster.ITEMS_TABLE + " where IM." + itemsMaster.KEY_ItemId + " = OD." + orderDetailsTbl.KEY_ItemId + ") * " +
      "OD." + orderDetailsTbl.KEY_Rate + ") as baseqty " +
      ", coalesce(IM." + itemsMaster.KEY_BrandId + ",'0') as ItemBrandId " +
      "from " + orderDetailsTbl.ORDERDETAILS_TABLE + " as OD " +
      "left join " + itemsMaster.ITEMS_TABLE + " as IM on OD." + orderDetailsTbl.KEY_ItemId + " = IM." + itemsMaster.KEY_ItemId + " " +
      "left join " + unitMaster.UNITMASTER_MASTER + " as UM on OD." + orderDetailsTbl.KEY_UnitId + " = UM." + unitMaster.KEY_UnitId + " " +
      "where " + orderDetailsTbl.KEY_OrderId + "=" + orderId;


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {
            let row;
            const lists = [];
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);

              const { Conversion, ItemBrandId, ItemCode, ItemId, ItemName, ItemUnit, OrderId,
                PendingQty, Qty, Rate, UMO, UnitId, _id, baseqty } = row;

              lists.push({
                Conversion, ItemBrandId, ItemCode, ItemId, ItemName, ItemUnit, OrderId,
                PendingQty, Qty, Rate, UMO, UnitId, _id, baseqty
              });

            }
            return lists;

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }


  public async cartCounter(orderId: string) {

    const dbVariable: DBVariable = new DBVariable();
    const orderDetailsTbl = dbVariable.OrderDetailsTable;
    const itemsMaster = dbVariable.ItemsMaster;
    const unitMaster = dbVariable.UnitMaster;

    const sqlQuery = "select OD.*, coalesce(IM." + itemsMaster.KEY_ItemName + ",'null') as ItemName , " +
      "coalesce(UM." + unitMaster.KEY_UnitSymbol + ",'null') as ItemUnit, IM." + itemsMaster.KEY_UMO + ", " +
      "((select CASE WHEN COALESCE(IM." + itemsMaster.KEY_UMOId + ",0) = OD." + orderDetailsTbl.KEY_UnitId + " " +
      "THEN  cast(OD." + orderDetailsTbl.KEY_Qty + " as Double) ELSE (cast(OD." + orderDetailsTbl.KEY_Qty + " as Double) * " +
      "cast(COALESCE(IM." + itemsMaster.KEY_Conversion + ",1) as Double))/COALESCE(IM." + itemsMaster.KEY_Denominator + ",1) END " +
      "from " + itemsMaster.ITEMS_TABLE + " where IM." + itemsMaster.KEY_ItemId + " = OD." + orderDetailsTbl.KEY_ItemId + ") * " +
      "OD." + orderDetailsTbl.KEY_Rate + ") as baseqty " +
      ", coalesce(IM." + itemsMaster.KEY_BrandId + ",'0') as ItemBrandId " +
      "from " + orderDetailsTbl.ORDERDETAILS_TABLE + " as OD " +
      "left join " + itemsMaster.ITEMS_TABLE + " as IM on OD." + orderDetailsTbl.KEY_ItemId + " = IM." + itemsMaster.KEY_ItemId + " " +
      "left join " + unitMaster.UNITMASTER_MASTER + " as UM on OD." + orderDetailsTbl.KEY_UnitId + " = UM." + unitMaster.KEY_UnitId + " " +
      "where " + orderDetailsTbl.KEY_OrderId + "=" + orderId

    //  const sqlQuery = "select ((SELECT count(*) FROM OrderTable where IsSync=0 and AddedInCart=1) +  (SELECT count(*) FROM AvailableStockMaster where IsSync=0 and TempAdded=0) +  (SELECT count(*) FROM DealerMaster where IsSync=0) +  (SELECT count(*) FROM BillingTable where IsSync=0 and AddedInCart=0)) as totalCount";


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {
            let row;
            var cart_counter;
            const lists = [];
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);

              // cart_counter = results.rows().length;

              //   console.log('cart counter ', row.totalCount);



              const { Conversion, ItemBrandId, ItemCode, ItemId, ItemName, ItemUnit, OrderId,
                PendingQty, Qty, Rate, UMO, UnitId, _id, baseqty } = row;

              lists.push({
                Conversion, ItemBrandId, ItemCode, ItemId, ItemName, ItemUnit, OrderId,
                PendingQty, Qty, Rate, UMO, UnitId, _id, baseqty
              });

            }
            //   return row.totalCount;
            return lists.length;

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }



  public async cartCounterDemo() {

    const dbVariable: DBVariable = new DBVariable();
    const orderDetailsTbl = dbVariable.OrderDetailsTable;
    const itemsMaster = dbVariable.ItemsMaster;
    const unitMaster = dbVariable.UnitMaster;

    // const sqlQuery = "select OD.*, coalesce(IM." + itemsMaster.KEY_ItemName + ",'null') as ItemName , " +
    //   "coalesce(UM." + unitMaster.KEY_UnitSymbol + ",'null') as ItemUnit, IM." + itemsMaster.KEY_UMO + ", " +
    //   "((select CASE WHEN COALESCE(IM." + itemsMaster.KEY_UMOId + ",0) = OD." + orderDetailsTbl.KEY_UnitId + " " +
    //   "THEN  cast(OD." + orderDetailsTbl.KEY_Qty + " as Double) ELSE (cast(OD." + orderDetailsTbl.KEY_Qty + " as Double) * " +
    //   "cast(COALESCE(IM." + itemsMaster.KEY_Conversion + ",1) as Double))/COALESCE(IM." + itemsMaster.KEY_Denominator + ",1) END " +
    //   "from " + itemsMaster.ITEMS_TABLE + " where IM." + itemsMaster.KEY_ItemId + " = OD." + orderDetailsTbl.KEY_ItemId + ") * " +
    //   "OD." + orderDetailsTbl.KEY_Rate + ") as baseqty " +
    //   ", coalesce(IM." + itemsMaster.KEY_BrandId + ",'0') as ItemBrandId " +
    //   "from " + orderDetailsTbl.ORDERDETAILS_TABLE + " as OD " +
    //   "left join " + itemsMaster.ITEMS_TABLE + " as IM on OD." + orderDetailsTbl.KEY_ItemId + " = IM." + itemsMaster.KEY_ItemId + " " +
    //   "left join " + unitMaster.UNITMASTER_MASTER + " as UM on OD." + orderDetailsTbl.KEY_UnitId + " = UM." + unitMaster.KEY_UnitId + " " +
    //   "where " + orderDetailsTbl.KEY_OrderId + "=" + orderId

    const sqlQuery = "select ((SELECT count(*) FROM OrderTable where IsSync=0 and AddedInCart=1) +  (SELECT count(*) FROM AvailableStockMaster where IsSync=0 and TempAdded=0) +  (SELECT count(*) FROM DealerMaster where IsSync=0) +  (SELECT count(*) FROM BillingTable where IsSync=0 and AddedInCart=0)) as totalCount";


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {
            let row;
            var cart_counter;
            const lists = [];
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);

              // cart_counter = results.rows().length;

              //   console.log('cart counter ', row.totalCount);



              // const { Conversion, ItemBrandId, ItemCode, ItemId, ItemName, ItemUnit, OrderId,
              //   PendingQty, Qty, Rate, UMO, UnitId, _id, baseqty } = row;

              // lists.push({
              //   Conversion, ItemBrandId, ItemCode, ItemId, ItemName, ItemUnit, OrderId,
              //   PendingQty, Qty, Rate, UMO, UnitId, _id, baseqty
              // });

            }
            return row.totalCount;
            //   return lists.length;

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }


  public async updateCartItemQuantity(orderId: string, itemId: string, qty: string) {

    const dbVariable: DBVariable = new DBVariable();
    const orderDetailsTbl = dbVariable.OrderDetailsTable;
    const itemsMaster = dbVariable.ItemsMaster;
    const unitMaster = dbVariable.UnitMaster;

    const sqlQuery = 'update ' + orderDetailsTbl.ORDERDETAILS_TABLE + ' set ' + orderDetailsTbl.KEY_Qty +
      '= ? where ' + orderDetailsTbl.KEY_ItemId + '= ? And ' + orderDetailsTbl.KEY_OrderId + '=?;';

    let updateData = [qty, itemId, orderId];
    // return sqlitedb.executeSql(sqlQuery, updateData);


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery, updateData)
          .then(([results]) => {

            console.log(sqlQuery, updateData);


          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }





  /////////----------------------------- Delete Order --------------------------------------/////


  public async deleteOrder(orderId: string) {

    const dbVariable: DBVariable = new DBVariable();
    const orderMaster = dbVariable.OrderTable;

    const sqlQuery = "DELETE FROM " + orderMaster.ORDER_TABLE + " WHERE " + orderMaster.KEY_OrderId + "= '" + orderId + "'";


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {
            this.deleteOrderDetail(orderId);
            return 'Order Deleted';

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }

  public async deleteOrderDetail(orderId: string) {

    const dbVariable: DBVariable = new DBVariable();
    const orderDetailMaster = dbVariable.OrderDetailsTable;

    const sqlQuery = "DELETE FROM " + orderDetailMaster.ORDERDETAILS_TABLE + " WHERE " + orderDetailMaster.KEY_OrderId + "= '" + orderId + "'";


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {
            return 'Order Detail Deleted';

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }

  public async deleteSingleOrder(itemId: string, orderId: string) {

    const dbVariable: DBVariable = new DBVariable();
    const orderDetailMaster = dbVariable.OrderDetailsTable;


    const sqlQuery = "DELETE FROM " + orderDetailMaster.ORDERDETAILS_TABLE + " WHERE " + orderDetailMaster.KEY_OrderId + "= '" + orderId
      + "' and " + orderDetailMaster.KEY_ItemId + "= " + itemId;


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {

            return 'Item Deleted Successfully';

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }




  public async getMyOrder(orderId: string) {

    const dbVariable: DBVariable = new DBVariable();
    const distributorTable = dbVariable.DistributorMaster;
    const orderTable = dbVariable.OrderTable;


    const sqlQuery = "select A.*,coalesce(C." + distributorTable.KEY_DistributorName + ",'null') as DistributorName from " +
      orderTable.ORDER_TABLE + " as A " +
      "left join " + distributorTable.DISTRIBUTOR_TABLE + "  as C on A." + orderTable.KEY_DistributorId +
      " = C." + distributorTable.KEY_DistributorId + " where A." + orderTable.KEY_OrderId + "=" + orderId;


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {

            // return 'Order Placed Successfully';

            let row;
            const lists = [];
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);

              // console.log('##########################', row);


              const { AddedInCart, AlteredOn, AppOrderNo, ApproveRejectStatus, ApprovedDate, ApprovedRemark, ApprovedStatus,
                BrandId, CancelDate, CancelRemark, CancelStatus, CreatedOn, DistributorCode, DistributorId, DistributorName,
                IsSync, NetTotal, OrderDate, OrderId, UserId, UserRemark, WebOrderNo, _id } = row;

              lists.push({
                AddedInCart, AlteredOn, AppOrderNo, ApproveRejectStatus, ApprovedDate, ApprovedRemark, ApprovedStatus,
                BrandId, CancelDate, CancelRemark, CancelStatus, CreatedOn, DistributorCode, DistributorId, DistributorName,
                IsSync, NetTotal, OrderDate, OrderId, UserId, UserRemark, WebOrderNo, _id
              });

            }
            return row;

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }




  public async getSubmitOrderDetailData(orderId: string) {

    const dbVariable: DBVariable = new DBVariable();
    const orderDetailsTbl = dbVariable.OrderDetailsTable;
    const itemsMaster = dbVariable.ItemsMaster;
    const unitMaster = dbVariable.UnitMaster;

    const sqlQuery = "select OD.*, coalesce(IM." + itemsMaster.KEY_ItemName + ",'null') as ItemName , " +
      "coalesce(UM." + unitMaster.KEY_UnitSymbol + ",'null') as ItemUnit, IM." + itemsMaster.KEY_UMO + ", " +
      "((select CASE WHEN COALESCE(IM." + itemsMaster.KEY_UMOId + ",0) = OD." + orderDetailsTbl.KEY_UnitId + " " +
      "THEN  cast(OD." + orderDetailsTbl.KEY_Qty + " as Double) ELSE (cast(OD." + orderDetailsTbl.KEY_Qty + " as Double) * " +
      "cast(COALESCE(IM." + itemsMaster.KEY_Conversion + ",1) as Double))/COALESCE(IM." + itemsMaster.KEY_Denominator + ",1) END " +
      "from " + itemsMaster.ITEMS_TABLE + " where IM." + itemsMaster.KEY_ItemId + " = OD." + orderDetailsTbl.KEY_ItemId + ") * " +
      "OD." + orderDetailsTbl.KEY_Rate + ") as baseqty " +
      ", coalesce(IM." + itemsMaster.KEY_BrandId + ",'0') as ItemBrandId " +
      "from " + orderDetailsTbl.ORDERDETAILS_TABLE + " as OD " +
      "left join " + itemsMaster.ITEMS_TABLE + " as IM on OD." + orderDetailsTbl.KEY_ItemId + " = IM." + itemsMaster.KEY_ItemId + " " +
      "left join " + unitMaster.UNITMASTER_MASTER + " as UM on OD." + orderDetailsTbl.KEY_UnitId + " = UM." + unitMaster.KEY_UnitId + " " +
      "where " + orderDetailsTbl.KEY_OrderId + "=" + orderId;


      console.log(sqlQuery);
      

    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {
            let row;
            const lists = [];
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);

              const { Conversion, ItemBrandId, ItemCode, ItemId, ItemName, ItemUnit, OrderId,
                PendingQty, Qty, Rate, UMO, UnitId, _id, baseqty, latitude, longitude } = row;

              lists.push({
                Conversion, ItemBrandId, ItemCode, ItemId, ItemName, ItemUnit, OrderId,
                PendingQty, Qty, Rate, UMO, UnitId, _id, baseqty, latitude, longitude
              });

            }
            return lists;

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }





  public async updateCartOrder(orderId: string) {

    const dbVariable: DBVariable = new DBVariable();
    const orderTbl = dbVariable.OrderTable;
    const itemsMaster = dbVariable.ItemsMaster;
    const unitMaster = dbVariable.UnitMaster;

    const sqlQuery = 'update ' + orderTbl.ORDER_TABLE + ' set ' +
      orderTbl.KEY_IsSync + '= ?,' +
      orderTbl.KEY_AddedInCart + '= ? where ' + orderTbl.KEY_OrderId + '=?;';

    let updateData = [1, 0, orderId];
    // return sqlitedb.executeSql(sqlQuery, updateData);


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery, updateData)
          .then(([results]) => {

            console.log(sqlQuery, updateData);


          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }


  public async updateOfflineCartOrder(orderId: string) {

    const dbVariable: DBVariable = new DBVariable();
    const orderTbl = dbVariable.OrderTable;
    const itemsMaster = dbVariable.ItemsMaster;
    const unitMaster = dbVariable.UnitMaster;

    const sqlQuery = 'update ' + orderTbl.ORDER_TABLE + ' set ' +
      orderTbl.KEY_IsSync + '= ?,' +
      orderTbl.KEY_AddedInCart + '= ? where ' + orderTbl.KEY_OrderId + '=?;';

    let updateData = [0, 0, orderId];
    // return sqlitedb.executeSql(sqlQuery, updateData);


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery, updateData)
          .then(([results]) => {

            console.log(sqlQuery, updateData);


          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }



  //######################################################   UTILITY    ##################################//

  ////////------------------------------- Get App Order Number---------------------------------------//////

  public async getAppOrderNumber() {

    const dbVariable: DBVariable = new DBVariable();
    const userTable = dbVariable.UserTable;
    const orderTable = dbVariable.OrderTable;
    var id = ''
    // var orderSeq = "SOA-"
    const sqlQuery = "SELECT 'SOA-' || substr((select ('0000000' || coalesce((select CAST((MAX(cast(substr(" + userTable.KEY_SoOrderNo + ",5) as integer)) + 1) as TEXT) from " + userTable.USER_TABLE + "),1))),(select length(x) from (select (coalesce((select CAST((MAX(cast(substr(" + userTable.KEY_SoOrderNo + ",5) as integer)) + 1) as TEXT)  from " + userTable.USER_TABLE + "),1)) as x) y),8) as neworderid;"


    const sql = "select (case when count(*) > 0 then (SELECT 'SOA-' || substr((select ('0000000' || coalesce((select CAST((MAX(cast(substr(" + orderTable.KEY_AppOrderNo + ",5) as integer)) + 1) as TEXT) from " + orderTable.ORDER_TABLE + "),1))),(select length(x) from (select (coalesce((select CAST((MAX(cast(substr(" + orderTable.KEY_AppOrderNo + ",5) as integer)) + 1) as TEXT)  from " + orderTable.ORDER_TABLE + "),1)) as x) y),8)) ELSE (SELECT 'SOA-' || substr((select ('0000000' || coalesce((select CAST((MAX(cast(substr(" + userTable.KEY_SoOrderNo + ",5) as integer)) + 1) as TEXT) from " + userTable.USER_TABLE + "),1))),(select length(x) from (select (coalesce((select CAST((MAX(cast(substr(" + userTable.KEY_SoOrderNo + ",5) as integer)) + 1) as TEXT)  from " + userTable.USER_TABLE + "),1)) as x) y),8)) END) as neworderid from " + orderTable.ORDER_TABLE
    // const sqlQuery = "SELECT 'SOA-' || substr((select ('0000000' || coalesce((select CAST((MAX(cast(substr(" + userTable.KEY_SoOrderNo + ",5) as integer)) + 1) as TEXT) from " + userTable.USER_TABLE + "),1))),(select length(x) from (select (coalesce((select CAST((MAX(cast(substr(" + userTable.KEY_SoOrderNo + ",5) as integer)) + 1) as TEXT)  from " + userTable.USER_TABLE + "),1)) as x) y),8) ;"

    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sql)
          .then(([results]) => {
            let row;

            const lists = [];
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);
              // console.log(row);
            }
            return row.neworderid;

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }


  ////////------------------------------- Get Order Id---------------------------------------//////

  public async getOrderId() {

    const dbVariable: DBVariable = new DBVariable();
    const orderTable = dbVariable.OrderTable;
    var id = ''
    const sqlQuery = "SELECT (coalesce(Max(" + orderTable.KEY_OrderId + "),0)+10000) as orderid FROM " + orderTable.ORDER_TABLE

    //const sqlQuery = "SELECT Max(" + orderTable.KEY_OrderId + ")  FROM " + orderTable.ORDER_TABLE


    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {
            let row;
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);
              // console.log(row.orderid);
            }
            return row.orderid;

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }


  ////////------------------------------- Get Order Id---------------------------------------//////

  public async distributorData() {

    const dbVariable: DBVariable = new DBVariable();
    const distTable = dbVariable.DistributorMaster;
    var id = ''
    // var orderSeq = "SOA-"
    const sqlQuery = "SELECT * FROM " + distTable.DISTRIBUTOR_TABLE



    return await this.getDatabase().then((db) => db)
      .then((sqlitedb) => {
        return sqlitedb.executeSql(sqlQuery)
          .then(([results]) => {
            let row;
            for (let i = 0; i < results.rows.length; i++) {
              row = results.rows.item(i);
              // console.log(row);
            }
            return row;

          })
          .catch((error) => {
            console.log(error)
          });
      })
      .catch((errorMsg) => {
        console.log(errorMsg)
      });
  }



}
// Export a single instance of DatabaseImpl
export const database: Database = new DatabaseImpl();

import SQLite from 'react-native-sqlite-storage';
import {DBVariable} from './DBVariable';

export class DatabaseInitialization {
  public async updateDatabaseTables(
    database: SQLite.SQLiteDatabase,
  ): Promise<void> {
    let dbVersion: number = 1;
    //console.log("Beginning database updates...");
    var databaseversion = await this.getDatabaseVersion(database);
    if (databaseversion === 0) {
      database
        .transaction(this.createTables)
        .then(() => {
          // Get the current database version
          return this.getDatabaseVersion(database);
        })
        .then((version) => {
          this.updateDatabaseVersion(database, dbVersion);
        });
    } else {
      /*if (databaseversion < dbVersion) {
          this.update1(database, dbVersion)
      }*/
    }
  }

  private createTables(transaction: SQLite.Transaction) {
    const dbVariable: DBVariable = new DBVariable();

    // Version table
    transaction.executeSql(
      'CREATE TABLE IF NOT EXISTS Version(version_id INTEGER PRIMARY KEY NOT NULL, version INTEGER);',
    );

    // User table
    transaction.executeSql(dbVariable.UserTable.USERTABLE_CREATE_SQL);
    transaction.executeSql(dbVariable.BrandTable.BRANDTABLE_CREATE_SQL);
    transaction.executeSql(dbVariable.DistributorMaster.DISTRIBUTOR_CREATE_SQL);

    transaction.executeSql(dbVariable.ItemsMaster.ITEM_CREATE_SQL);
    transaction.executeSql(dbVariable.UnitMaster.UNITMASTER_CREATE_SQL);
    transaction.executeSql(dbVariable.ItemGroupMaster.ITEMGROUP_CREATE_SQL);
    transaction.executeSql(dbVariable.CityMaster.CITYMASTER_CREATE_SQL);
    transaction.executeSql(dbVariable.StateMaster.STATEMASTER_CREATE_SQL);
    transaction.executeSql(dbVariable.OrderTable.ORDER_CREATE_SQL);
    transaction.executeSql(
      dbVariable.OrderDetailsTable.ORDERDETAILS_CREATE_SQL,
    );
    transaction.executeSql(dbVariable.DivisionTable.DIVISION_CREATE_SQL);
    transaction.executeSql(
      dbVariable.DivisionMappingTable.DIVISIONMAP_CREATE_SQL,
    );
    transaction.executeSql(
      dbVariable.DistributorDivisionTable.DIST_DIVISION_CREATE_SQL,
    );
    transaction.executeSql(
      dbVariable.ReceivedOrderTable.RECEIVED_ORDER_CREATE_SQL,
    );
    transaction.executeSql(
      dbVariable.ReceivedOrderDetailsTable.RECEIVED_ORDER_DETAILS_CREATE_SQL,
    );
    transaction.executeSql(
      dbVariable.AvailableStockMaster.AVAILABLESTOCK_CREATE_SQL,
    );
    transaction.executeSql(
      dbVariable.AvailableStockItemDetails.AVAILABLESTOCKDETAIL_CREATE_SQL,
    );
    transaction.executeSql(dbVariable.LogTable.LOG_CREATE_SQL);
    transaction.executeSql(dbVariable.DealerMaster.DEALER_CREATE_SQL);
    transaction.executeSql(dbVariable.MarginBrandTable.MARGINBRAND_CREATE_SQL);
    transaction.executeSql(dbVariable.DesignationTable.DESIGNATION_CREATE_SQL);
    transaction.executeSql(dbVariable.BillingTable.BILLING_CREATE_SQL);
    transaction.executeSql(
      dbVariable.BillingDetailsTable.BILLING_DETAILS_CREATE_SQL,
    );
    transaction.executeSql(
      dbVariable.ItemScanDetails.ITEMSCAN_DETAILS_CREATE_SQL,
    );
    transaction.executeSql(
      dbVariable.PrimaryCategory.PRIMARY_CATEGORY_CREATE_SQL,
    );
    transaction.executeSql(
      dbVariable.SecondaryCategory.SECONDARY_CATEGORY_CREATE_SQL,
    );
    transaction.executeSql(
      dbVariable.PurchaseInvoiceTable.PURCHASE_INVOICE_TABLE_CREATE_SQL,
    );
    transaction.executeSql(
      dbVariable.PurchaseInvoiceItemsTable.PURCHASE_INVOICE_ITEMS_CREATE_SQL,
    );
  }

  // Get the version of the database, as specified in the Version table
  private getDatabaseVersion(database: SQLite.SQLiteDatabase): Promise<number> {
    // Select the highest version number from the version table
    return database
      .executeSql('SELECT version FROM Version ORDER BY version DESC LIMIT 1;')
      .then(([results]) => {
        if (results.rows && results.rows.length > 0) {
          const version = results.rows.item(0).version;
          return version;
        } else {
          return 0;
        }
      })
      .catch((error) => {
        console.log(`No version set. Returning 0. Details: ${error}`);
        return 0;
      });
  }

  private updateDatabaseVersion(
    database: SQLite.SQLiteDatabase,
    currentVersion: number,
  ) {
    database.executeSql('DELETE FROM Version;');
    database.executeSql(
      'INSERT INTO Version(version) VALUES (' + currentVersion + ');',
    );
  }

  private dropAllTables() {
    // DANGER! For dev only
    // const dropAllTables = false;
    // if (dropAllTables) {
    //   transaction.executeSql("DROP TABLE IF EXISTS Version;");
    // }
  }

  private update1(database: SQLite.SQLiteDatabase, currentVersion: number) {
    this.updateDatabaseVersion(database, currentVersion);
  }
}

define("UsrTournament_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrTournament"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "a307323d-a97b-4e39-9ce9-47357ee00387",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "AddGamesButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(AddGamesButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAddTournamentGamesProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "UsrTournamentId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrTitle",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrTitle_m1i261s",
					"control": "$PDS_UsrTitle_m1i261s",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrCode",
					"control": "$PDS_UsrCode",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrTournamentType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrTournamentType",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrTournamentType",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_cjx6cr7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_cjx6cr7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrTournamentType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrActive",
				"values": {
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_UsrActive",
					"ariaLabel": "",
					"labelPosition": "above",
					"tooltip": "",
					"control": "$PDS_UsrActive",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrManager",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_x40tmh3",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_x40tmh3_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrNotes",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 3,
						"rowSpan": 3
					},
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.PDS_UsrNotes",
					"control": "$PDS_UsrNotes",
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": true,
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "SysFile",
						"recordColumnName": "RecordId"
					},
					"visible": true,
					"readonly": false,
					"toolbarDisplayMode": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GamesTabPanel",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"tabTitleColor": "auto",
					"selectedTabTitleColor": "auto",
					"headerBackgroundColor": "auto",
					"underlineSelectedTabColor": "auto",
					"fitContent": true,
					"allowToggleClose": true
				},
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabContainer_pj2pu4v",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_pj2pu4v_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "GamesTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GamesDetailGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_pj2pu4v",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GamesDetailExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(GamesDetailExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GamesDetailGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_6t3ihib",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "GamesDetailExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_tuxq5rq",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_6t3ihib",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GamesDataGridAddBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GamesDataGridAddBtn_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrGame",
							"defaultValues": [
								{
									"attributeName": "UsrTournament",
									"value": "$Id"
								}
							]
						}
					}
				},
				"parentName": "FlexContainer_tuxq5rq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GamesDataGridRefreshBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GamesDataGridRefreshBtn_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GamesGridDetailDS"
						}
					}
				},
				"parentName": "FlexContainer_tuxq5rq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GamesDataGridSettingsBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GamesDataGridSettingsBtn_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_tuxq5rq",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_8kldtoi",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GamesDataGrid"
						}
					}
				},
				"parentName": "GamesDataGridSettingsBtn",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_c8pzyhl",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrGame"
						}
					}
				},
				"parentName": "GamesDataGridSettingsBtn",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GamesDataGridSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GamesDataGridSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GamesDataGridSearchFilter_GamesGridDetail",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GamesGridDetail"
										]
									}
								]
							}
						],
						"from": [
							"GamesDataGridSearchFilter_SearchValue",
							"GamesDataGridSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_tuxq5rq",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GamesDSGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": null
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				},
				"parentName": "GamesDetailExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GamesDataGrid",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GamesGridDetail",
					"primaryColumnName": "GamesGridDetailDS_Id",
					"columns": [
						{
							"id": "bae7afd9-8979-e8a0-269b-f55e1a498a8c",
							"code": "GamesGridDetailDS_UsrDateTime",
							"caption": "#ResourceString(GamesGridDetailDS_UsrDateTime)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"activeRow": "$GamesGridDetail_ActiveRow",
					"selectionState": "$GamesGridDetail_SelectionState",
					"_selectionOptions": {
						"attribute": "GamesGridDetail_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "GamesDSGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GamesGridDetail_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GamesGridDetailDS",
							"filters": "$GamesGridDetail | crt.ToCollectionFilters : 'GamesGridDetail' : $GamesGridDetail_SelectionState | crt.SkipIfSelectionEmpty : $GamesGridDetail_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GamesDataGrid",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GamesGridDetail_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GamesGridDetailDS",
							"filters": "$GamesGridDetail | crt.ToCollectionFilters : 'GamesGridDetail' : $GamesGridDetail_SelectionState | crt.SkipIfSelectionEmpty : $GamesGridDetail_SelectionState"
						}
					}
				},
				"parentName": "GamesGridDetail_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GamesGridDetail_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GamesDataGrid",
							"filters": "$GamesGridDetail | crt.ToCollectionFilters : 'GamesGridDetail' : $GamesGridDetail_SelectionState | crt.SkipIfSelectionEmpty : $GamesGridDetail_SelectionState"
						}
					}
				},
				"parentName": "GamesDataGrid",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GamesGridDetail_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "GamesGridDetailDS",
							"selectionState": "$GamesGridDetail_SelectionState"
						}
					}
				},
				"parentName": "GamesDataGrid",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GamesGridDetail_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GamesGridDetailDS",
							"filters": "$GamesGridDetail | crt.ToCollectionFilters : 'GamesGridDetail' : $GamesGridDetail_SelectionState | crt.SkipIfSelectionEmpty : $GamesGridDetail_SelectionState"
						}
					}
				},
				"parentName": "GamesDataGrid",
				"propertyName": "bulkActions",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"OnServerMsgSent": {},
					"PDS_UsrTitle_m1i261s": {
						"modelConfig": {
							"path": "PDS.UsrTitle"
						}
					},
					"PDS_UsrActive": {
						"modelConfig": {
							"path": "PDS.UsrActive"
						}
					},
					"PDS_UsrTournamentType": {
						"modelConfig": {
							"path": "PDS.UsrTournamentType"
						}
					},
					"PDS_UsrTournamentType_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrNotes": {
						"modelConfig": {
							"path": "PDS.UsrNotes"
						}
					},
					"PDS_UsrManager": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrCode": {
						"modelConfig": {
							"path": "PDS.UsrCode"
						}
					},
					"GamesGridDetail": {
						"isCollection": true,
						"modelConfig": {
							"path": "GamesGridDetailDS",
							"filterAttributes": [
								{
									"name": "GamesDataGridSearchFilter_GamesGridDetail",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GamesGridDetailDS_UsrDateTime": {
									"modelConfig": {
										"path": "GamesGridDetailDS.UsrDateTime"
									}
								},
								"GamesGridDetailDS_Id": {
									"modelConfig": {
										"path": "GamesGridDetailDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GamesGridDetailDS": [
							{
								"attributePath": "UsrTournament",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrTournament"
						},
						"scope": "page"
					},
					"GamesGridDetailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrGame",
							"attributes": {
								"UsrDateTime": {
									"path": "UsrDateTime"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.SaveRecordRequest",
				handler: async (request, next) => {
					const REGIONAL_TOURNAMENT_TYPE_ID = "88f4e729-144a-4fae-bdce-ea9ea9bb6cca";
					const isActive = await request.$context.PDS_UsrActive;
					const tournamentType = await request.$context.PDS_UsrTournamentType;
					const tournamentTypeId = tournamentType?.value;

					if (!isActive || tournamentTypeId !== REGIONAL_TOURNAMENT_TYPE_ID) {
						return next?.handle(request);
					}

					const getMaxRegionalTournaments = async () => {
						const sysSettingsService = new sdk.SysSettingsService();
						const setting = await sysSettingsService.getByCode("MaxNumOfRegTournaments");
						return setting?.value;
					};
					
					const getActiveRegionalTournamentsCount = async (currentTournamentId) => {
						const tournamentModel = await sdk.Model.create("UsrTournament");

						const filters = new sdk.FilterGroup();
						await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "UsrActive", true);
						await filters.addSchemaColumnFilterWithParameter(
							sdk.ComparisonType.Equal,
							"UsrTournamentType",
							REGIONAL_TOURNAMENT_TYPE_ID
						);
						await filters.addSchemaColumnFilterWithParameter(
							sdk.ComparisonType.Not_equal,
							"Id",
							currentTournamentId
						);
					
						const tournaments = await tournamentModel.load({
							attributes: ["Id"],
							parameters: [{
								type: sdk.ModelParameterType.Filter,
								value: filters
							}]
						});
					
						return tournaments.length;
					};

					const maxActiveRegionalTournaments = await getMaxRegionalTournaments();
					
					const currentTournamentId = await request.$context.Id;
					const activeRegionalTournamentsCount = await getActiveRegionalTournamentsCount(currentTournamentId);
					if (activeRegionalTournamentsCount >= maxActiveRegionalTournaments) {
						await request.$context.executeRequest({
							type: "crt.NotificationRequest",
							message: `No more than ${maxActiveRegionalTournaments} regional tournaments can be active at a time.`
						});
						return false;
					}

					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelInitRequest",
				handler: async (request, next) => {
					await next?.handle(request);
				
					request.$context.OnServerMsgSent = async function(event, message) {
						if (message?.Header?.Sender !== "UsrTournamentGamesAdded") {
							return;
						}
					
						let body = {};
						try {
							body = JSON.parse(message.Body);
						} catch (e) {
							console.warn("Could not parse message.Body")
							return;
						}
					
						const currentTournamentId = await this.Id;
					
						if ( body?.TournamentId?.toLowerCase() !== currentTournamentId?.toLowerCase() ) {
							console.warn("Tournament ids does not match");
							return;
						}
					
						await this.executeRequest({
							type: "crt.LoadDataRequest",
							$context: this,
							config: {
								loadType: "reload",
								useLastLoadParameters: true
							},
							dataSourceName: "GamesGridDetailDS"
						});
					};
				
					Terrasoft.ServerChannel.on(
						Terrasoft.EventName.ON_MESSAGE,
						await request.$context.OnServerMsgSent,
						request.$context
					);
				}
			},
			{
				request: "crt.HandleViewModelDestroyRequest",
				handler: async (request, next) => {
					if (request.$context.OnServerMsgSent) {
						Terrasoft.ServerChannel.un(
							Terrasoft.EventName.ON_MESSAGE,
							await request.$context.OnServerMsgSent,
							request.$context
						);
					}
				
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
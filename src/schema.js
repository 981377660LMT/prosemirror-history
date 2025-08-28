const schema = {
  name: 'protable测试',
  tasks: [
    {
      url: 64802,
      name: 'sql1',
      type: 'sql',
      config: {},
      trigger: {
        all: true,
        deps: [],
        type: 'manual'
      },
      flowList: [
        {
          type: 'param',
          content: '[]'
        },
        {
          type: 'sql',
          content: '{"rootSqlKey":"Root"}'
        }
      ],
      eventList: [],
      sortIndex: 0,
      moduleType: 'tasks',
      url_prefix: '/lander_platform/',
      id: 442802
    },
    {
      id: 442893,
      url: 64803,
      name: 'template_sql1',
      type: 'sql',
      uuid: '9aa257b1-a658-47fe-92e2-eb52bec6534e',
      config: {},
      sql_id: '7523141928951530505',
      os_link:
        'https://data.bytedance.net/invoker/cn/2/7176479493392057405/api/ide?extra=%7B%22id%22%3A%227523141928951530505%22%2C%22versionId%22%3A%22%22%7D&tabType=api_ide',
      trigger: {
        all: true,
        deps: [],
        type: 'manual',
        defaultTriggerOnce: true
      },
      flowList: [
        {
          type: 'param',
          content: '[]'
        },
        {
          type: 'sql',
          content: '{"rootSqlKey":"Root"}'
        }
      ],
      eventList: [],
      sortIndex: 0,
      moduleType: 'tasks',
      url_prefix: '/lander_platform/'
    }
  ],
  landerModuleInput: [],
  states: [],
  uid: 'If-_Rg84wIeA',
  prefixUrl: '',
  extend: {
    pageName: 'protable测试',
    projectName: '',
    teamName: '',
    version: 3,
    extend_solutions: 10,
    runtimeVersion: '2.0.94'
  },
  schema: {
    children: [
      {
        data: {
          value: {
            id: '23067304-541d-4868-1e16-054c8f7d51c9',
            data: {
              name: 'page',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-frame-container/1.0.2/dist/index.umd.js',
              context: {
                size: {
                  width: 1200,
                  height: 1,
                  widthType: 'fixed',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 24,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: '#FFFFFFFF',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-ui-frame-container',
              version: '1.0.2',
              settings: {
                graph: {
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  cssStyle: {
                    data: {
                      landerType: ['object']
                    }
                  },
                  customId: {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                values: {}
              },
              isRootCell: true,
              materialId: 2931,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-frame-container/1.0.2/dist/setting.umd.js',
              isContainer: true,
              materialType: 0,
              componentType: 'stack',
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: 'If-_Rg84wIeA',
            zIndex: 1,
            children: [
              '60daae3c-96e6-41e6-1b66-d74ff7e572b1',
              'c264b02d-7325-41b1-88b1-eff06cbf63e5'
            ],
            isLocked: false,
            component: '@ecom/lander-ui-frame-container',
            moduleType: 'components',
            relativePosition: {
              top: 24,
              left: 24,
              right: 24,
              bottom: 24
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: '23067304-541d-4868-1e16-054c8f7d51c9',
        componentName: '@ecom/lander-ui-frame-container'
      },
      {
        data: {
          value: {
            id: '60daae3c-96e6-41e6-1b66-d74ff7e572b1',
            data: {
              name: 'protable1',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/lander-team/lander-ui-protable/4.2.14/dist/index.umd.js',
              context: {
                size: {
                  width: 1,
                  height: 100,
                  widthType: 'fill',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: 'transparent',
                preserveAspectRatio: false
              },
              pkgName: '@lander-team/lander-ui-protable',
              version: '4.2.14',
              settings: {
                graph: {
                  id: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  data: {
                    data: {
                      landerFieldMarker: {
                        id: 'dataIndex',
                        type: 'table',
                        source: 'flatSourceData'
                      }
                    }
                  },
                  total: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  events: {
                    data: {
                      landerFieldMarker: {
                        type: 'eventHandler'
                      }
                    }
                  },
                  rowKey: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  bordered: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  showRank: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  emptyType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  isLoading: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  showTotal: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  showExpand: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  sourceData: {
                    data: {
                      landerType: ['array', 'object']
                    }
                  },
                  'data.0.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.0.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.1.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.2.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.3.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.4.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.5.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.6.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.7.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.8.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.9.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  tableLayout: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.1.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.10.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.10.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.11.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.12.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.13.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.14.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.15.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.16.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.3.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.4.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.5.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.6.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.7.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.8.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.9.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  OperationSlot: {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.0.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.11.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.13.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.14.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.15.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.16.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.2.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  showOperation: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  enableRowGroup: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  defaultPageSize: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  enableRowExpand: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  pageSizeOptions: {
                    data: {
                      landerType: ['array']
                    }
                  },
                  showQuickJumper: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  showSizeChanger: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  OperatorLeftSlot: {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.0.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  enableTreeExpand: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  hideOnSinglePage: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  rowSelectionType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  OperatorRightSlot: {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.0.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.1.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.10.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.3.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.4.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.5.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.6.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.7.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.8.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.9.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  enableColumnFixed: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  enableHeaderFixed: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.11.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.12.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.13.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.14.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.15.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.16.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  enableGroupHeaders: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.0.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.0.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.1.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.1.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.2.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.2.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.3.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.3.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.4.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.4.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.5.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.5.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.6.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.6.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.7.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.7.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.8.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.8.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.9.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.9.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.11.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.11.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.12.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.12.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.13.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.13.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.14.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.14.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.15.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.15.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.16.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.16.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  enablePaginationType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.1.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.2.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.3.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.4.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.5.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.6.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.7.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.8.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.9.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.10.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.11.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.12.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.13.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.14.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.15.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.16.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.0.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.defaultSortOrder': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.0.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.1.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.1.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.10.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.2.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.3.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.3.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.4.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.4.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.5.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.5.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.6.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.6.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.7.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.7.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.8.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.8.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.9.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.9.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.10.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.10.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.11.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.11.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.12.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.12.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.13.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.13.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.14.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.14.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.15.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.15.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.16.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.16.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  enableCustomBatchOperation: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.3.sortDirectionsConfig': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.gap': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.size': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.row': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.round': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.13.valueFormatter.TAG.tagType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.valueFormatter.TAG.tagType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.height': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.radius': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.13.valueFormatter.TAG.category': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.valueFormatter.TAG.maxCount': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.14.valueFormatter.TAG.category': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.valueFormatter.TAG.maxCount': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.13.valueFormatter.TAG.colorType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.valueFormatter.TAG.colorType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.valueFormatter.TEXT_LINK.link': {
                    data: {
                      landerType: ['array', 'string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.column': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.10.valueFormatter.extra.0.hyphen': {
                    data: {
                      landerType: ['string', 'array', 'undefined']
                    }
                  },
                  'data.10.valueFormatter.extra.0.rowGap': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.iconSize': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.maxCount': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.15.valueFormatter.TEXT_LINK.link': {
                    data: {
                      landerType: ['array', 'string']
                    }
                  },
                  'data.2.valueFormatter.TEXT_LINK.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.valueFormatter.suffix.0.content': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.ellipse': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.operation': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.valueFormatter.TEXT_LINK.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.valueFormatter.suffix.0.content': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.maxCount': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.zIndexMode': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.valueFormatter.TAG.colorMapping': {
                    data: {
                      landerType: ['object']
                    }
                  },
                  'data.14.valueFormatter.TAG.colorMapping': {
                    data: {
                      landerType: ['object']
                    }
                  },
                  'data.7.valueFormatter.extra.0.hideArrow': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.8.valueFormatter.TIME.outputFormat': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.valueFormatter.DATE.outputFormat': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.DATE.outputFormat': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.columnGap': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.10.valueFormatter.extra.0.rowHyphen': {
                    data: {
                      landerType: ['string', 'array', 'undefined']
                    }
                  },
                  'data.16.valueFormatter.PROGRESS.showInfo': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.valueFormatter.extra.0.repeatMode': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.valueFormatter.TEXT_LINK.lineClamp': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.2.valueFormatter.TEXT_LINK.openInNew': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.15.valueFormatter.TEXT_LINK.lineClamp': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.15.valueFormatter.TEXT_LINK.openInNew': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.7.valueFormatter.extra.0.tendencyType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.valueFormatter.extra.0.baseValueColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.valueFormatter.extra.0.originZeroValue': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.7.valueFormatter.extra.0.tendencyBaseValue': {
                    data: {
                      landerType: ['number']
                    }
                  }
                },
                values: {
                  id: '',
                  data: [
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'id',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'id',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_aqJsSkky8G'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: null
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'text',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'text',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_za1KcibvVx'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [],
                        prefix: [],
                        suffix: [
                          {
                            type: 'TOOLTIP'
                          }
                        ],
                        dataType: null
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'longText',
                      width: 150,
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'longText',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_F8KjCZVdB1'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [],
                        prefix: [],
                        suffix: [
                          {
                            type: 'COPY'
                          }
                        ],
                        dataType: 'TEXT_LINK',
                        TEXT_LINK: {
                          lineClamp: 1,
                          openInNew: true
                        }
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'server',
                      align: 'left',
                      title: 'money',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'money',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_sgTynv4Kev'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: 'MONEY'
                      },
                      columnBackground: 'white',
                      defaultSortOrder: 'no',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'moneyCent',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'moneyCent',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_LvHXEPhTh6'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: 'MONEY_CENT'
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'number',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'number',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_9oFdrEk05e'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: 'NUMBER'
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'numberAbbr',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'numberAbbr',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_1u8Jf7hGEA'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: 'NUMBER_ABBR'
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'trend',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'trend',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_D9me5RNsFG'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [
                          {
                            type: 'trend',
                            tendencyType: 'RED',
                            baseValueColor: 'normal'
                          }
                        ],
                        prefix: [],
                        suffix: [],
                        dataType: 'NUMBER'
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'time',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'time',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_06I8h0E7Qz'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        TIME: {},
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: 'TIME'
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'date',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'date',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_iqKcxqAjMO'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        DATE: {},
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: 'DATE'
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'dateRange',
                      width: 160,
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'dateRange',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_oQtL4i0MyZ'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        DATE: {},
                        extra: [
                          {
                            type: 'multi',
                            hyphen: '-',
                            ellipse: 'action',
                            repeatMode: 'fit'
                          }
                        ],
                        prefix: [],
                        suffix: [],
                        dataType: 'DATE'
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'percent',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'percent',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_nJTV8LXKek'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: 'PERCENT'
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'image',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'image',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_g3oOnKUz14'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        IMAGE: {
                          maxCount: 2
                        },
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: 'IMAGE'
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'tag',
                      width: 110,
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'tag',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_A2kQZ5JqXa'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        TAG: {
                          tagType: 'BASIC',
                          category: 'strong',
                          maxCount: 10,
                          colorType: 'mapping',
                          colorMapping: {
                            error: 'aa',
                            success: 'bb'
                          }
                        },
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: 'TAG'
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'status',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'status',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_xwqz9y7uoo'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        TAG: {
                          tagType: 'STATUS',
                          category: 'strong',
                          maxCount: 10,
                          colorType: 'mapping',
                          colorMapping: {
                            error: '失败',
                            success: '成功'
                          }
                        },
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: 'TAG'
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'link',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'link',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_ip01LENjks'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: 'TEXT_LINK',
                        TEXT_LINK: {
                          link: '{{item}}',
                          lineClamp: 1,
                          openInNew: true
                        }
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'progress',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'progress',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_IewJwHIqJ1'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [],
                        prefix: [],
                        suffix: [],
                        PROGRESS: {},
                        dataType: 'PROGRESS'
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    }
                  ],
                  events: [],
                  rowKey: 'id',
                  bordered: true,
                  showRank: false,
                  emptyType: 'text',
                  isLoading: false,
                  showTotal: true,
                  showExpand: false,
                  sourceData: [
                    {
                      id: 1,
                      tag: 'aa,bb,cc',
                      date: 1752657063957,
                      link: 'https://www.baidu.com/1',
                      text: '第 1 层：文本1',
                      time: 1752657063957,
                      image: [
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image'
                      ],
                      money: 93.277279623438,
                      trend: -1356684,
                      number: 559986,
                      status: '失败',
                      percent: 1.235534,
                      children: [
                        {
                          id: '1_1',
                          tag: 'aa,bb,cc',
                          date: 1752657063957,
                          link: 'https://www.baidu.com/1',
                          text: '第 2 层：文本1',
                          time: 1752657063957,
                          image: [
                            'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image'
                          ],
                          money: 114.10941108400804,
                          trend: -1356684,
                          number: 559986,
                          status: '失败',
                          percent: 1.235534,
                          children: null,
                          longText:
                            '第 2 层：第1条：超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本',
                          progress: 0.5,
                          dateRange: [1752656851557, 1752657063957],
                          moneyCent: 100.45,
                          numberAbbr: 552342
                        }
                      ],
                      longText:
                        '第 1 层：第1条：超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本',
                      progress: 0.5,
                      dateRange: [1752656851557, 1752657063957],
                      moneyCent: 10.45,
                      numberAbbr: 552342
                    },
                    {
                      id: 2,
                      tag: 'aa,bb,cc,aa,bb,cc',
                      date: 1752657060357,
                      link: 'https://www.baidu.com/2',
                      text: '第 1 层：文本2',
                      time: 1752657060357,
                      image: [
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image'
                      ],
                      money: 68.75977054000631,
                      trend: -678342,
                      number: 1119972,
                      status: '成功',
                      percent: 2.471068,
                      children: [
                        {
                          id: '2_1',
                          tag: 'aa,bb,cc',
                          date: 1752657063957,
                          link: 'https://www.baidu.com/1',
                          text: '第 2 层：文本1',
                          time: 1752657063957,
                          image: [
                            'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image'
                          ],
                          money: 109.61588335013565,
                          trend: -1356684,
                          number: 559986,
                          status: '失败',
                          percent: 1.235534,
                          children: null,
                          longText:
                            '第 2 层：第1条：超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本',
                          progress: 0.5,
                          dateRange: [1752656851557, 1752657063957],
                          moneyCent: 100.45,
                          numberAbbr: 552342
                        }
                      ],
                      longText:
                        '第 1 层：第2条：超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本',
                      progress: 1,
                      dateRange: [1752656635557, 1752657060357],
                      moneyCent: 20.45,
                      numberAbbr: 1104684
                    },
                    {
                      id: 3,
                      tag: 'aa,bb,cc,aa,bb,cc,aa,bb,cc',
                      date: 1752657056757,
                      link: 'https://www.baidu.com/3',
                      text: '第 1 层：文本3',
                      time: 1752657056757,
                      image: [
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image'
                      ],
                      money: 65.54926016008747,
                      trend: 0,
                      number: 1679958,
                      status: '失败',
                      percent: 3.706602,
                      children: [
                        {
                          id: '3_1',
                          tag: 'aa,bb,cc',
                          date: 1752657063957,
                          link: 'https://www.baidu.com/1',
                          text: '第 2 层：文本1',
                          time: 1752657063957,
                          image: [
                            'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image'
                          ],
                          money: 137.76259315107578,
                          trend: -1356684,
                          number: 559986,
                          status: '失败',
                          percent: 1.235534,
                          children: null,
                          longText:
                            '第 2 层：第1条：超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本',
                          progress: 0.5,
                          dateRange: [1752656851557, 1752657063957],
                          moneyCent: 100.45,
                          numberAbbr: 552342
                        }
                      ],
                      longText:
                        '第 1 层：第3条：超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本',
                      progress: 1.5,
                      dateRange: [1752656419557, 1752657056757],
                      moneyCent: 30.45,
                      numberAbbr: 1657026
                    },
                    {
                      id: 4,
                      tag: 'aa,bb,cc,aa,bb,cc,aa,bb,cc,aa,bb,cc',
                      date: 1752657053157,
                      link: 'https://www.baidu.com/4',
                      text: '第 1 层：文本4',
                      time: 1752657053157,
                      image: [
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image'
                      ],
                      money: 0.9529117691272904,
                      trend: 678342,
                      number: 2239944,
                      status: '成功',
                      percent: 4.942136,
                      children: [
                        {
                          id: '4_1',
                          tag: 'aa,bb,cc',
                          date: 1752657063957,
                          link: 'https://www.baidu.com/1',
                          text: '第 2 层：文本1',
                          time: 1752657063957,
                          image: [
                            'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image'
                          ],
                          money: 115.49418010390669,
                          trend: -1356684,
                          number: 559986,
                          status: '失败',
                          percent: 1.235534,
                          children: null,
                          longText:
                            '第 2 层：第1条：超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本',
                          progress: 0.5,
                          dateRange: [1752656851557, 1752657063957],
                          moneyCent: 100.45,
                          numberAbbr: 552342
                        }
                      ],
                      longText:
                        '第 1 层：第4条：超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本',
                      progress: 2,
                      dateRange: [1752656203557, 1752657053157],
                      moneyCent: 40.45,
                      numberAbbr: 2209368
                    },
                    {
                      id: 5,
                      tag: 'aa,bb,cc,aa,bb,cc,aa,bb,cc,aa,bb,cc,aa,bb,cc',
                      date: 1752657049557,
                      link: 'https://www.baidu.com/5',
                      text: '第 1 层：文本5',
                      time: 1752657049557,
                      image: [
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image'
                      ],
                      money: 69.46791816955556,
                      trend: 1356684,
                      number: 2799930,
                      status: '失败',
                      percent: 6.177669999999999,
                      children: [
                        {
                          id: '5_1',
                          tag: 'aa,bb,cc',
                          date: 1752657063957,
                          link: 'https://www.baidu.com/1',
                          text: '第 2 层：文本1',
                          time: 1752657063957,
                          image: [
                            'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image'
                          ],
                          money: 39.88466359021992,
                          trend: -1356684,
                          number: 559986,
                          status: '失败',
                          percent: 1.235534,
                          children: null,
                          longText:
                            '第 2 层：第1条：超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本',
                          progress: 0.5,
                          dateRange: [1752656851557, 1752657063957],
                          moneyCent: 100.45,
                          numberAbbr: 552342
                        }
                      ],
                      longText:
                        '第 1 层：第5条：超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本',
                      progress: 2.5,
                      dateRange: [1752655987557, 1752657049557],
                      moneyCent: 50.45,
                      numberAbbr: 2761710
                    },
                    {
                      id: 6,
                      tag: 'aa,bb,cc,aa,bb,cc,aa,bb,cc,aa,bb,cc,aa,bb,cc,aa,bb,cc',
                      date: 1752657045957,
                      link: 'https://www.baidu.com/6',
                      text: '第 1 层：文本6',
                      time: 1752657045957,
                      image: [
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image',
                        'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image'
                      ],
                      money: 97.76313929034218,
                      trend: 2035026,
                      number: 3359916,
                      status: '成功',
                      percent: 7.413204,
                      children: [
                        {
                          id: '6_1',
                          tag: 'aa,bb,cc',
                          date: 1752657063957,
                          link: 'https://www.baidu.com/1',
                          text: '第 2 层：文本1',
                          time: 1752657063957,
                          image: [
                            'https://p1-ecom-vfe.byteimg.com/tos-cn-i-b9lktzv5be/product_derekz.png~tplv-b9lktzv5be-image.image'
                          ],
                          money: 197.1888753588795,
                          trend: -1356684,
                          number: 559986,
                          status: '失败',
                          percent: 1.235534,
                          children: null,
                          longText:
                            '第 2 层：第1条：超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本',
                          progress: 0.5,
                          dateRange: [1752656851557, 1752657063957],
                          moneyCent: 100.45,
                          numberAbbr: 552342
                        }
                      ],
                      longText:
                        '第 1 层：第6条：超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本超长文本',
                      progress: 3,
                      dateRange: [1752655771557, 1752657045957],
                      moneyCent: 60.45,
                      numberAbbr: 3314052
                    }
                  ],
                  tableLayout: 'auto',
                  OperationSlot: {
                    slotName: 'operationCell'
                  },
                  showOperation: false,
                  enableRowGroup: false,
                  defaultPageSize: 5,
                  enableRowExpand: false,
                  pageSizeOptions: [5, 10, 20, 50, 100],
                  showQuickJumper: false,
                  showSizeChanger: true,
                  OperatorLeftSlot: {},
                  enableTreeExpand: true,
                  hideOnSinglePage: false,
                  rowSelectionType: 'no',
                  OperatorRightSlot: {},
                  enableColumnFixed: false,
                  enableHeaderFixed: false,
                  enableGroupHeaders: false,
                  enablePaginationType: 'server'
                }
              },
              materialId: 6212,
              settingUrl:
                'https://unpkg.byted-static.com/lander-team/lander-ui-protable/4.2.14/dist/setting.umd.js',
              materialType: 0,
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: '23067304-541d-4868-1e16-054c8f7d51c9',
            zIndex: 1,
            children: [],
            isLocked: false,
            component: '@lander-team/lander-ui-protable',
            moduleType: 'components',
            relativePosition: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: '60daae3c-96e6-41e6-1b66-d74ff7e572b1',
        componentName: '@lander-team/lander-ui-protable'
      },
      {
        data: {
          value: {
            id: 'f3fde130-df79-40dc-881a-9866eb703a1d',
            data: {
              name: 'template_textFormat6',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/ecom/lander-text-format/1.0.15/dist/index.umd.js',
              context: {
                size: {
                  width: 1,
                  height: 100,
                  widthType: 'fill',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: 'transparent',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-text-format',
              version: '1.0.15',
              settings: {
                graph: {
                  events: {
                    data: {
                      landerFieldMarker: {
                        type: 'eventHandler'
                      }
                    }
                  },
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  fontSize: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  vertical: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  fontColor: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  formatter: {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  horizontal: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  textWeight: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'formatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                values: {
                  value:
                    '<ul style="padding-left: 20px; margin-bottom: 0;"><li style="list-style-type:disc;">配合按钮组件，在其事件中配置 <b style="color:red">导出数据</b> ，并选择想要导出的数据所在的sql接口、文件格式（excel、飞书）即可。</b><div>',
                  events: [],
                  fontSize: 12,
                  fontColor: 'rgb(137, 139, 143)',
                  formatter: {
                    extra: [],
                    prefix: [],
                    suffix: [],
                    dataType: 'HTML'
                  },
                  textWeight: 0
                }
              },
              materialId: 6203,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-text-format/1.0.15/dist/setting.umd.js',
              materialType: 0,
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: '1db9cb92-f7bb-4b4b-b562-253e69bce737',
            zIndex: 1,
            children: [],
            isLocked: false,
            component: '@ecom/lander-text-format',
            moduleType: 'components',
            relativePosition: {
              top: 44,
              left: 0,
              right: 0,
              bottom: -9
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: 'f3fde130-df79-40dc-881a-9866eb703a1d',
        componentName: '@ecom/lander-text-format'
      },
      {
        data: {
          value: {
            id: '2c8ff7ce-cdc3-4234-9d73-66d90de08feb',
            data: {
              name: 'template_textFormat3',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/ecom/lander-text-format/1.0.15/dist/index.umd.js',
              context: {
                size: {
                  width: 200,
                  height: 100,
                  widthType: 'fit',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: 'transparent',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-text-format',
              version: '1.0.15',
              settings: {
                graph: {
                  events: {
                    data: {
                      landerFieldMarker: {
                        type: 'eventHandler'
                      }
                    }
                  },
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  fontSize: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  vertical: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  fontColor: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  formatter: {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  horizontal: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  textWeight: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'formatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                values: {
                  value: '2. 导出2：导出至飞书',
                  events: [],
                  fontSize: 14,
                  fontColor: '#333',
                  formatter: {
                    extra: [],
                    prefix: [],
                    suffix: [],
                    dataType: null
                  },
                  textWeight: 1
                }
              },
              materialId: 6203,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-text-format/1.0.15/dist/setting.umd.js',
              materialType: 0,
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: '12fc7c08-fdb4-4938-99f6-b5d583034e20',
            zIndex: 1,
            children: [],
            isLocked: false,
            component: '@ecom/lander-text-format',
            moduleType: 'components',
            relativePosition: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: '2c8ff7ce-cdc3-4234-9d73-66d90de08feb',
        componentName: '@ecom/lander-text-format'
      },
      {
        data: {
          value: {
            id: '2375e4da-bfa2-4f55-a524-d53b9e18e2d5',
            data: {
              name: 'template_stack5',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-stack-container/1.0.2/dist/index.umd.js',
              context: {
                size: {
                  width: 1,
                  height: 46,
                  widthType: 'fill',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                },
                borderRadius: 0,
                backgroundColor: '',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-ui-stack-container',
              version: '1.0.2',
              settings: {
                graph: {
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  cssStyle: {
                    data: {
                      landerType: ['object']
                    }
                  },
                  customId: {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                values: {}
              },
              materialId: 2930,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-stack-container/1.0.2/dist/setting.umd.js',
              isContainer: true,
              materialType: 0,
              componentType: 'stack',
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: 'a9cf4715-a2e6-4a10-94b7-a1ddf29baf81',
            zIndex: 1,
            children: ['96754f20-f1e6-4706-9f53-cbfb67afeaa4'],
            isLocked: false,
            component: '@ecom/lander-ui-stack-container',
            moduleType: 'components',
            relativePosition: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: '2375e4da-bfa2-4f55-a524-d53b9e18e2d5',
        componentName: '@ecom/lander-ui-stack-container'
      },
      {
        data: {
          value: {
            id: 'a9cf4715-a2e6-4a10-94b7-a1ddf29baf81',
            data: {
              name: 'template_stack4',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-stack-container/1.0.2/dist/index.umd.js',
              context: {
                size: {
                  width: 1,
                  height: 'auto',
                  widthType: 'fill',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: '0',
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: '',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-ui-stack-container',
              version: '1.0.2',
              settings: {
                graph: {
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  cssStyle: {
                    data: {
                      landerType: ['object']
                    }
                  },
                  customId: {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                values: {}
              },
              materialId: 2930,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-stack-container/1.0.2/dist/setting.umd.js',
              isContainer: true,
              materialType: 0,
              componentType: 'stack',
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: 'c264b02d-7325-41b1-88b1-eff06cbf63e5',
            zIndex: 1,
            children: [
              '2375e4da-bfa2-4f55-a524-d53b9e18e2d5',
              '5bdca8b0-52dc-45e8-bff1-46430af17da8',
              '1db9cb92-f7bb-4b4b-b562-253e69bce737'
            ],
            isLocked: false,
            component: '@ecom/lander-ui-stack-container',
            moduleType: 'components',
            relativePosition: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 827
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: 'a9cf4715-a2e6-4a10-94b7-a1ddf29baf81',
        componentName: '@ecom/lander-ui-stack-container'
      },
      {
        data: {
          value: {
            id: '12fc7c08-fdb4-4938-99f6-b5d583034e20',
            data: {
              name: 'template_stack3',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-stack-container/1.0.2/dist/index.umd.js',
              context: {
                size: {
                  width: 1,
                  height: 'auto',
                  widthType: 'fill',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: '',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-ui-stack-container',
              version: '1.0.2',
              settings: {
                graph: {
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  cssStyle: {
                    data: {
                      landerType: ['object']
                    }
                  },
                  customId: {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                values: {}
              },
              materialId: 2930,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-stack-container/1.0.2/dist/setting.umd.js',
              isContainer: true,
              materialType: 0,
              componentType: 'stack',
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: 'c264b02d-7325-41b1-88b1-eff06cbf63e5',
            zIndex: 1,
            children: [
              '2c8ff7ce-cdc3-4234-9d73-66d90de08feb',
              '11e84339-352e-498a-a6fb-2c23b4b11727',
              'd6533103-80c1-4205-873c-4604eee202df'
            ],
            isLocked: false,
            component: '@ecom/lander-ui-stack-container',
            moduleType: 'components',
            relativePosition: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: '12fc7c08-fdb4-4938-99f6-b5d583034e20',
        componentName: '@ecom/lander-ui-stack-container'
      },
      {
        data: {
          value: {
            id: 'c264b02d-7325-41b1-88b1-eff06cbf63e5',
            data: {
              name: 'template_page',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-frame-container/1.0.2/dist/index.umd.js',
              context: {
                size: {
                  width: 1,
                  height: 'auto',
                  widthType: 'fill',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: 'white',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-ui-frame-container',
              version: '1.0.2',
              settings: {
                graph: {
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  cssStyle: {
                    data: {
                      landerType: ['object']
                    }
                  },
                  customId: {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                values: {}
              },
              sourceId: 836,
              isRootCell: false,
              materialId: 2931,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-frame-container/1.0.2/dist/setting.umd.js',
              sourceType: 'template',
              isContainer: true,
              materialType: 0,
              componentType: 'stack',
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: '23067304-541d-4868-1e16-054c8f7d51c9',
            zIndex: 1,
            children: [
              'a9cf4715-a2e6-4a10-94b7-a1ddf29baf81',
              '8250cdec-7ee3-4f86-9475-7f3907f2989f',
              '12fc7c08-fdb4-4938-99f6-b5d583034e20'
            ],
            isLocked: false,
            component: '@ecom/lander-ui-frame-container',
            moduleType: 'components',
            relativePosition: {
              top: 24,
              left: 24,
              right: 24,
              bottom: 24
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: 'c264b02d-7325-41b1-88b1-eff06cbf63e5',
        componentName: '@ecom/lander-ui-frame-container'
      },
      {
        data: {
          value: {
            id: '96754f20-f1e6-4706-9f53-cbfb67afeaa4',
            data: {
              name: 'template_text1',
              isText: true,
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl: 'https://unpkg.byted-static.com/ecom/lander-ui-text/1.7.22/dist/index.umd.js',
              context: {
                size: {
                  width: 100,
                  height: 32,
                  widthType: 'fit',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                textResizing: 'auto-width',
                backgroundColor: 'transparent',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-ui-text',
              version: '1.7.22',
              settings: {
                graph: {
                  size: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  color: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  value: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  action: {
                    data: {
                      landerFieldMarker: {
                        type: 'eventHandler'
                      }
                    }
                  },
                  tooltip: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  lineClamp: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  lineHeight: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  textWeight: {
                    data: {
                      landerType: ['string', 'number']
                    }
                  },
                  customStyle: {
                    data: {
                      landerType: ['object']
                    }
                  },
                  fontHoverColor: {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                marker: {
                  textWeight: {
                    enableCodeMode: false
                  }
                },
                values: {
                  size: '16',
                  color: '#333',
                  value: '导出数据至excel/飞书',
                  cursor: 'default',
                  tooltip: '',
                  textAlign: {
                    vertical: 'flex-start',
                    horizontal: 'flex-start'
                  },
                  fontFamily: 'PingFang SC',
                  lineHeight: '24',
                  textWeight: 1,
                  landerSettings: {
                    constrain: {
                      top: true
                    }
                  }
                }
              },
              materialId: 6258,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-text/1.7.22/dist/setting.umd.js',
              materialType: 0,
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: '2375e4da-bfa2-4f55-a524-d53b9e18e2d5',
            zIndex: 1,
            children: [],
            isLocked: false,
            component: '@ecom/lander-ui-text',
            moduleType: 'components',
            relativePosition: {
              top: 17,
              left: 8,
              right: 1080,
              bottom: 106
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: '96754f20-f1e6-4706-9f53-cbfb67afeaa4',
        componentName: '@ecom/lander-ui-text'
      },
      {
        data: {
          value: {
            id: '22b3c69f-d9b5-4db0-9459-9f3b3dc9fd7d',
            data: {
              name: 'template_protable2',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/lander-team/lander-ui-protable/4.2.14/dist/index.umd.js',
              context: {
                size: {
                  width: 1,
                  height: 100,
                  widthType: 'fill',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: 'transparent',
                preserveAspectRatio: false
              },
              pkgName: '@lander-team/lander-ui-protable',
              version: '4.2.14',
              settings: {
                graph: {
                  id: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  data: {
                    data: {
                      landerFieldMarker: {
                        id: 'dataIndex',
                        type: 'table',
                        source: 'flatSourceData'
                      }
                    }
                  },
                  total: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  events: {
                    data: {
                      landerFieldMarker: {
                        type: 'eventHandler'
                      }
                    }
                  },
                  rowKey: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  bordered: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  showRank: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  emptyType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  isLoading: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  showTotal: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  showExpand: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  sourceData: {
                    data: {
                      landerType: ['array', 'object']
                    }
                  },
                  'data.0.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.0.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.1.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.2.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.3.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.4.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.5.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.6.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.7.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.8.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.9.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  tableLayout: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.1.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.10.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.10.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.11.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.12.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.13.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.14.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.15.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.16.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.3.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.4.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.5.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.6.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.7.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.8.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.9.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  OperationSlot: {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.0.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.11.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.13.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.14.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.15.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.16.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.2.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  showOperation: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  enableRowGroup: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  defaultPageSize: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  enableRowExpand: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  pageSizeOptions: {
                    data: {
                      landerType: ['array']
                    }
                  },
                  showQuickJumper: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  showSizeChanger: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  OperatorLeftSlot: {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.0.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  enableTreeExpand: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  hideOnSinglePage: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  rowSelectionType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  OperatorRightSlot: {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.0.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.1.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.10.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.3.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.4.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.5.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.6.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.7.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.8.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.9.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  enableColumnFixed: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  enableHeaderFixed: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.11.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.12.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.13.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.14.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.15.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.16.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  enableGroupHeaders: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.0.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.0.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.1.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.1.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.2.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.2.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.3.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.3.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.4.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.4.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.5.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.5.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.6.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.6.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.7.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.7.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.8.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.8.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.9.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.9.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.11.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.11.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.12.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.12.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.13.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.13.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.14.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.14.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.15.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.15.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.16.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.16.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  enablePaginationType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.1.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.2.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.3.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.4.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.5.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.6.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.7.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.8.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.9.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.10.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.11.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.12.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.13.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.14.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.15.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.16.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.0.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.defaultSortOrder': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.0.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.1.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.1.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.10.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.2.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.3.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.3.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.4.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.4.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.5.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.5.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.6.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.6.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.7.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.7.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.8.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.8.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.9.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.9.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.10.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.10.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.11.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.11.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.12.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.12.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.13.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.13.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.14.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.14.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.15.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.15.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.16.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.16.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  enableCustomBatchOperation: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.3.sortDirectionsConfig': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.gap': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.size': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.row': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.round': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.13.valueFormatter.TAG.tagType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.valueFormatter.TAG.tagType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.height': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.radius': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.13.valueFormatter.TAG.category': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.valueFormatter.TAG.maxCount': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.14.valueFormatter.TAG.category': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.valueFormatter.TAG.maxCount': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.13.valueFormatter.TAG.colorType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.valueFormatter.TAG.colorType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.valueFormatter.TEXT_LINK.link': {
                    data: {
                      landerType: ['array', 'string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.column': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.10.valueFormatter.extra.0.hyphen': {
                    data: {
                      landerType: ['string', 'array', 'undefined']
                    }
                  },
                  'data.10.valueFormatter.extra.0.rowGap': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.iconSize': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.maxCount': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.15.valueFormatter.TEXT_LINK.link': {
                    data: {
                      landerType: ['array', 'string']
                    }
                  },
                  'data.2.valueFormatter.TEXT_LINK.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.valueFormatter.suffix.0.content': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.ellipse': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.operation': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.valueFormatter.TEXT_LINK.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.valueFormatter.suffix.0.content': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.maxCount': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.zIndexMode': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.valueFormatter.TAG.colorMapping': {
                    data: {
                      landerType: ['object']
                    }
                  },
                  'data.14.valueFormatter.TAG.colorMapping': {
                    data: {
                      landerType: ['object']
                    }
                  },
                  'data.7.valueFormatter.extra.0.hideArrow': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.8.valueFormatter.TIME.outputFormat': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.valueFormatter.DATE.outputFormat': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.DATE.outputFormat': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.columnGap': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.10.valueFormatter.extra.0.rowHyphen': {
                    data: {
                      landerType: ['string', 'array', 'undefined']
                    }
                  },
                  'data.16.valueFormatter.PROGRESS.showInfo': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.valueFormatter.extra.0.repeatMode': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.valueFormatter.TEXT_LINK.lineClamp': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.2.valueFormatter.TEXT_LINK.openInNew': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.15.valueFormatter.TEXT_LINK.lineClamp': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.15.valueFormatter.TEXT_LINK.openInNew': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.7.valueFormatter.extra.0.tendencyType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.valueFormatter.extra.0.baseValueColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.valueFormatter.extra.0.originZeroValue': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.7.valueFormatter.extra.0.tendencyBaseValue': {
                    data: {
                      landerType: ['number']
                    }
                  }
                },
                values: {
                  id: '',
                  data: [
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'date',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'date',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_cSktJtFp73'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: null
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'type_name',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'first_cate_name',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_3bbnmVLl7P'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: null
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    }
                  ],
                  events: [],
                  rowKey: 'id',
                  bordered: true,
                  showRank: false,
                  emptyType: 'text',
                  isLoading: false,
                  showTotal: true,
                  showExpand: false,
                  sourceData: '{{ template_sql1.data }}',
                  tableLayout: 'auto',
                  OperationSlot: {
                    slotName: 'operationCell'
                  },
                  showOperation: false,
                  enableRowGroup: false,
                  defaultPageSize: 5,
                  enableRowExpand: false,
                  pageSizeOptions: [5, 10, 20, 50, 100],
                  showQuickJumper: false,
                  showSizeChanger: true,
                  OperatorLeftSlot: {},
                  enableTreeExpand: true,
                  hideOnSinglePage: false,
                  rowSelectionType: 'no',
                  OperatorRightSlot: {},
                  enableColumnFixed: false,
                  enableHeaderFixed: false,
                  enableGroupHeaders: false,
                  enablePaginationType: 'server'
                }
              },
              materialId: 6212,
              settingUrl:
                'https://unpkg.byted-static.com/lander-team/lander-ui-protable/4.2.14/dist/setting.umd.js',
              materialType: 0,
              stateProperties: {
                pageInfo: {
                  desc: '当前分页信息，包含页码及每页条数'
                },
                orderInfo: {
                  desc: '列排序信息，包含当前排序的字段及顺序'
                },
                currentRow: {
                  desc: '当前点击的行的数据'
                },
                currentCell: {
                  desc: '当前点击的单元格的数据'
                },
                selectRowKeys: {
                  desc: '当前选中的行的keys'
                },
                currentExpanded: {
                  desc: '当前点击行的展开状态，true为展开'
                },
                expandedRowKeys: {
                  desc: '当前展开行的keys'
                },
                currentOperaBtnKey: {
                  desc: '当前操作的按钮key'
                }
              }
            },
            shape: 'react-shape',
            parent: '8250cdec-7ee3-4f86-9475-7f3907f2989f',
            zIndex: 1,
            children: [],
            isLocked: false,
            component: '@lander-team/lander-ui-protable',
            moduleType: 'components',
            relativePosition: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: '22b3c69f-d9b5-4db0-9459-9f3b3dc9fd7d',
        componentName: '@lander-team/lander-ui-protable'
      },
      {
        data: {
          value: {
            id: 'cbc91649-ef5d-4452-8b34-c0712d793544',
            data: {
              name: 'template_text2',
              isText: true,
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl: 'https://unpkg.byted-static.com/ecom/lander-ui-text/1.7.22/dist/index.umd.js',
              context: {
                size: {
                  width: 'auto',
                  height: 32,
                  widthType: 'fit',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                textResizing: 'auto-width',
                backgroundColor: 'transparent',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-ui-text',
              version: '1.7.22',
              settings: {
                graph: {
                  size: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  color: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  value: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  action: {
                    data: {
                      landerFieldMarker: {
                        type: 'eventHandler'
                      }
                    }
                  },
                  tooltip: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  lineClamp: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  lineHeight: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  textWeight: {
                    data: {
                      landerType: ['string', 'number']
                    }
                  },
                  customStyle: {
                    data: {
                      landerType: ['object']
                    }
                  },
                  fontHoverColor: {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                marker: {
                  textWeight: {
                    enableCodeMode: false
                  }
                },
                values: {
                  size: 12,
                  color: '#333',
                  value: '想要导出接口数据到excel/飞书表格中',
                  cursor: 'default',
                  tooltip: '',
                  textAlign: {
                    vertical: 'flex-start',
                    horizontal: 'flex-start'
                  },
                  fontFamily: 'PingFang SC',
                  lineHeight: 18,
                  textWeight: 0,
                  landerSettings: {
                    constrain: {
                      top: true
                    }
                  }
                }
              },
              materialId: 6258,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-text/1.7.22/dist/setting.umd.js',
              materialType: 0,
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: '5bdca8b0-52dc-45e8-bff1-46430af17da8',
            zIndex: 1,
            children: [],
            isLocked: false,
            component: '@ecom/lander-ui-text',
            moduleType: 'components',
            relativePosition: {
              top: 38,
              left: -20,
              right: 956,
              bottom: 64
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: 'cbc91649-ef5d-4452-8b34-c0712d793544',
        componentName: '@ecom/lander-ui-text'
      },
      {
        data: {
          value: {
            id: '2a1607c5-07d4-4be6-ad37-498d64324f8a',
            data: {
              name: 'template_textFormat2',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/ecom/lander-text-format/1.0.15/dist/index.umd.js',
              context: {
                size: {
                  width: 200,
                  height: 100,
                  widthType: 'fit',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: 'transparent',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-text-format',
              version: '1.0.15',
              settings: {
                graph: {
                  events: {
                    data: {
                      landerFieldMarker: {
                        type: 'eventHandler'
                      }
                    }
                  },
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  fontSize: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  vertical: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  fontColor: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  formatter: {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  horizontal: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  textWeight: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'formatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                values: {
                  value: '1. 导出1：导出至excel',
                  events: [],
                  fontSize: 14,
                  fontColor: '#333',
                  formatter: {
                    extra: [],
                    prefix: [],
                    suffix: [],
                    dataType: null
                  },
                  textWeight: 1
                }
              },
              materialId: 6203,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-text-format/1.0.15/dist/setting.umd.js',
              materialType: 0,
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: '8250cdec-7ee3-4f86-9475-7f3907f2989f',
            zIndex: 1,
            children: [],
            isLocked: false,
            component: '@ecom/lander-text-format',
            moduleType: 'components',
            relativePosition: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: '2a1607c5-07d4-4be6-ad37-498d64324f8a',
        componentName: '@ecom/lander-text-format'
      },
      {
        data: {
          value: {
            id: '1db9cb92-f7bb-4b4b-b562-253e69bce737',
            data: {
              name: 'template_stack7',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-stack-container/1.0.2/dist/index.umd.js',
              context: {
                size: {
                  width: 1,
                  height: 'auto',
                  widthType: 'fill',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: '4',
                  display: 'flex',
                  padding: [8, 0, 0, 0],
                  flexWrap: false,
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: '',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-ui-stack-container',
              version: '1.0.2',
              settings: {
                graph: {
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  cssStyle: {
                    data: {
                      landerType: ['object']
                    }
                  },
                  customId: {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                values: {}
              },
              materialId: 2930,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-stack-container/1.0.2/dist/setting.umd.js',
              isContainer: true,
              materialType: 0,
              componentType: 'stack',
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: 'a9cf4715-a2e6-4a10-94b7-a1ddf29baf81',
            zIndex: 1,
            children: [
              'f3fe2244-2f6b-4f7e-849a-261ab31ba340',
              'e99df27a-b0d7-477c-ab6b-b95652d033fe',
              'f3fde130-df79-40dc-881a-9866eb703a1d'
            ],
            isLocked: false,
            component: '@ecom/lander-ui-stack-container',
            moduleType: 'components',
            relativePosition: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: '1db9cb92-f7bb-4b4b-b562-253e69bce737',
        componentName: '@ecom/lander-ui-stack-container'
      },
      {
        data: {
          value: {
            id: 'd6533103-80c1-4205-873c-4604eee202df',
            data: {
              name: 'template_protable3',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/lander-team/lander-ui-protable/4.2.14/dist/index.umd.js',
              context: {
                size: {
                  width: 1,
                  height: 100,
                  widthType: 'fill',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: 'transparent',
                preserveAspectRatio: false
              },
              pkgName: '@lander-team/lander-ui-protable',
              version: '4.2.14',
              settings: {
                graph: {
                  id: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  data: {
                    data: {
                      landerFieldMarker: {
                        id: 'dataIndex',
                        type: 'table',
                        source: 'flatSourceData'
                      }
                    }
                  },
                  total: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  events: {
                    data: {
                      landerFieldMarker: {
                        type: 'eventHandler'
                      }
                    }
                  },
                  rowKey: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  bordered: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  showRank: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  emptyType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  isLoading: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  showTotal: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  showExpand: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  sourceData: {
                    data: {
                      landerType: ['array', 'object']
                    }
                  },
                  'data.0.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.0.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.1.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.2.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.3.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.4.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.5.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.6.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.7.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.8.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.9.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  tableLayout: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.1.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.10.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.10.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.11.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.12.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.13.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.14.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.15.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.data': {
                    data: {
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.16.sort': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.3.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.4.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.5.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.6.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.7.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.8.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.9.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  OperationSlot: {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.0.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.11.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.13.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.14.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.15.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.16.align': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.2.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  showOperation: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.prompt': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  enableRowGroup: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  defaultPageSize: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  enableRowExpand: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  pageSizeOptions: {
                    data: {
                      landerType: ['array']
                    }
                  },
                  showQuickJumper: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  showSizeChanger: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  OperatorLeftSlot: {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.0.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  enableTreeExpand: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  hideOnSinglePage: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  rowSelectionType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  OperatorRightSlot: {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.0.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.1.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.10.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.dataIndex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.extraFlex': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.3.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.4.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.5.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.6.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.7.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.8.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.9.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  enableColumnFixed: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  enableHeaderFixed: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.11.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.12.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.13.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.14.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.15.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  'data.16.ColumnSlot': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'SlotFunction'
                      }
                    }
                  },
                  enableGroupHeaders: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.0.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.0.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.1.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.1.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.2.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.2.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.3.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.3.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.4.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.4.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.5.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.5.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.6.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.6.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.7.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.7.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.8.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.8.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.9.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.9.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.11.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.11.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.12.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.12.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.13.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.13.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.14.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.14.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.15.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.15.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.16.columnHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.16.enableCustom': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  enablePaginationType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.1.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.2.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.3.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.4.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.5.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.6.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.7.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.8.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.9.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.10.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.11.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.12.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.13.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.14.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.15.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.16.valueFormatter': {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  'data.0.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.defaultSortOrder': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.0.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.1.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.1.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.10.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.columnBackground': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.2.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.3.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.3.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.4.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.4.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.5.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.5.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.6.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.6.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.7.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.7.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.8.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.8.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.9.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.9.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.10.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.10.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.11.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.11.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.12.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.12.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.13.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.13.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.14.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.14.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.15.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.15.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.16.mergeCell.colSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  'data.16.mergeCell.rowSpan': {
                    data: {
                      landerType: ['undefined', 'number'],
                      landerFieldMarker: {
                        inScope: true
                      }
                    }
                  },
                  enableCustomBatchOperation: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.3.sortDirectionsConfig': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.0.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.3.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.4.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.5.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.6.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.8.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.11.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.16.valueFormatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.gap': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.size': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.row': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.round': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.width': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.13.valueFormatter.TAG.tagType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.valueFormatter.TAG.tagType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.height': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.radius': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.13.valueFormatter.TAG.category': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.valueFormatter.TAG.maxCount': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.14.valueFormatter.TAG.category': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.valueFormatter.TAG.maxCount': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.13.valueFormatter.TAG.colorType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.14.valueFormatter.TAG.colorType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.valueFormatter.TEXT_LINK.link': {
                    data: {
                      landerType: ['array', 'string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.column': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.10.valueFormatter.extra.0.hyphen': {
                    data: {
                      landerType: ['string', 'array', 'undefined']
                    }
                  },
                  'data.10.valueFormatter.extra.0.rowGap': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.iconSize': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.maxCount': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.15.valueFormatter.TEXT_LINK.link': {
                    data: {
                      landerType: ['array', 'string']
                    }
                  },
                  'data.2.valueFormatter.TEXT_LINK.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.1.valueFormatter.suffix.0.content': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.ellipse': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.operation': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.15.valueFormatter.TEXT_LINK.title': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.valueFormatter.suffix.0.content': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.maxCount': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.12.valueFormatter.IMAGE.zIndexMode': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.13.valueFormatter.TAG.colorMapping': {
                    data: {
                      landerType: ['object']
                    }
                  },
                  'data.14.valueFormatter.TAG.colorMapping': {
                    data: {
                      landerType: ['object']
                    }
                  },
                  'data.7.valueFormatter.extra.0.hideArrow': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.8.valueFormatter.TIME.outputFormat': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.9.valueFormatter.DATE.outputFormat': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.DATE.outputFormat': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.10.valueFormatter.extra.0.columnGap': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.10.valueFormatter.extra.0.rowHyphen': {
                    data: {
                      landerType: ['string', 'array', 'undefined']
                    }
                  },
                  'data.16.valueFormatter.PROGRESS.showInfo': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.10.valueFormatter.extra.0.repeatMode': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.2.valueFormatter.TEXT_LINK.lineClamp': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.2.valueFormatter.TEXT_LINK.openInNew': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.15.valueFormatter.TEXT_LINK.lineClamp': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'data.15.valueFormatter.TEXT_LINK.openInNew': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.7.valueFormatter.extra.0.tendencyType': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.valueFormatter.extra.0.baseValueColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'data.7.valueFormatter.extra.0.originZeroValue': {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  'data.7.valueFormatter.extra.0.tendencyBaseValue': {
                    data: {
                      landerType: ['number']
                    }
                  }
                },
                values: {
                  id: '',
                  data: [
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'date',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'date',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_cSktJtFp73'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: null
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    },
                    {
                      data: '{{item}}',
                      sort: 'no',
                      align: 'left',
                      title: 'type',
                      prompt: '',
                      colSpan: 1,
                      _$isAuto: true,
                      dataIndex: 'first_cate_name',
                      extraFlex: 'vertical',
                      mergeCell: {
                        colSpan: 1,
                        rowSpan: 1
                      },
                      ColumnSlot: {
                        slotName: 'column_3bbnmVLl7P'
                      },
                      columnHidden: false,
                      enableCustom: false,
                      extraInfoData: [],
                      valueFormatter: {
                        extra: [],
                        prefix: [],
                        suffix: [],
                        dataType: null
                      },
                      columnBackground: 'white',
                      sortDirectionsConfig: 'asend-after-descend'
                    }
                  ],
                  events: [],
                  rowKey: 'id',
                  bordered: true,
                  showRank: false,
                  emptyType: 'text',
                  isLoading: false,
                  showTotal: true,
                  showExpand: false,
                  sourceData: '{{ template_sql1.data }}',
                  tableLayout: 'auto',
                  OperationSlot: {
                    slotName: 'operationCell'
                  },
                  showOperation: false,
                  enableRowGroup: false,
                  defaultPageSize: 5,
                  enableRowExpand: false,
                  pageSizeOptions: [5, 10, 20, 50, 100],
                  showQuickJumper: false,
                  showSizeChanger: true,
                  OperatorLeftSlot: {},
                  enableTreeExpand: true,
                  hideOnSinglePage: false,
                  rowSelectionType: 'no',
                  OperatorRightSlot: {},
                  enableColumnFixed: false,
                  enableHeaderFixed: false,
                  enableGroupHeaders: false,
                  enablePaginationType: 'server'
                }
              },
              materialId: 6212,
              settingUrl:
                'https://unpkg.byted-static.com/lander-team/lander-ui-protable/4.2.14/dist/setting.umd.js',
              materialType: 0,
              stateProperties: {
                pageInfo: {
                  desc: '当前分页信息，包含页码及每页条数'
                },
                orderInfo: {
                  desc: '列排序信息，包含当前排序的字段及顺序'
                },
                currentRow: {
                  desc: '当前点击的行的数据'
                },
                currentCell: {
                  desc: '当前点击的单元格的数据'
                },
                selectRowKeys: {
                  desc: '当前选中的行的keys'
                },
                currentExpanded: {
                  desc: '当前点击行的展开状态，true为展开'
                },
                expandedRowKeys: {
                  desc: '当前展开行的keys'
                },
                currentOperaBtnKey: {
                  desc: '当前操作的按钮key'
                }
              }
            },
            shape: 'react-shape',
            parent: '12fc7c08-fdb4-4938-99f6-b5d583034e20',
            zIndex: 1,
            children: [],
            isLocked: false,
            component: '@lander-team/lander-ui-protable',
            moduleType: 'components',
            relativePosition: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: 'd6533103-80c1-4205-873c-4604eee202df',
        componentName: '@lander-team/lander-ui-protable'
      },
      {
        data: {
          value: {
            id: '8250cdec-7ee3-4f86-9475-7f3907f2989f',
            data: {
              name: 'template_stack2',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-stack-container/1.0.2/dist/index.umd.js',
              context: {
                size: {
                  width: 1,
                  height: 'auto',
                  widthType: 'fill',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: '',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-ui-stack-container',
              version: '1.0.2',
              settings: {
                graph: {
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  cssStyle: {
                    data: {
                      landerType: ['object']
                    }
                  },
                  customId: {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                values: {}
              },
              materialId: 2930,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-stack-container/1.0.2/dist/setting.umd.js',
              isContainer: true,
              materialType: 0,
              componentType: 'stack',
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: 'c264b02d-7325-41b1-88b1-eff06cbf63e5',
            zIndex: 1,
            children: [
              '2a1607c5-07d4-4be6-ad37-498d64324f8a',
              '5c9227c6-3b00-4c37-a441-4e942af40c69',
              '22b3c69f-d9b5-4db0-9459-9f3b3dc9fd7d'
            ],
            isLocked: false,
            component: '@ecom/lander-ui-stack-container',
            moduleType: 'components',
            relativePosition: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: '8250cdec-7ee3-4f86-9475-7f3907f2989f',
        componentName: '@ecom/lander-ui-stack-container'
      },
      {
        data: {
          value: {
            id: '5bdca8b0-52dc-45e8-bff1-46430af17da8',
            data: {
              name: 'template_stack6',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-stack-container/1.0.2/dist/index.umd.js',
              context: {
                size: {
                  width: 1,
                  height: 52,
                  widthType: 'fill',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: '0',
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: '',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-ui-stack-container',
              version: '1.0.2',
              settings: {
                graph: {
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  cssStyle: {
                    data: {
                      landerType: ['object']
                    }
                  },
                  customId: {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                values: {}
              },
              materialId: 2930,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-ui-stack-container/1.0.2/dist/setting.umd.js',
              isContainer: true,
              materialType: 0,
              componentType: 'stack',
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: 'a9cf4715-a2e6-4a10-94b7-a1ddf29baf81',
            zIndex: 1,
            children: [
              'cbc91649-ef5d-4452-8b34-c0712d793544',
              'ff3acf9d-f117-4458-84c5-4f7e6705c42c'
            ],
            isLocked: false,
            component: '@ecom/lander-ui-stack-container',
            moduleType: 'components',
            relativePosition: {
              top: 52,
              left: 24,
              right: 0,
              bottom: 0
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: '5bdca8b0-52dc-45e8-bff1-46430af17da8',
        componentName: '@ecom/lander-ui-stack-container'
      },
      {
        data: {
          value: {
            id: 'e99df27a-b0d7-477c-ab6b-b95652d033fe',
            data: {
              name: 'template_textFormat5',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/ecom/lander-text-format/1.0.15/dist/index.umd.js',
              context: {
                size: {
                  width: 1,
                  height: 100,
                  widthType: 'fill',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: 'transparent',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-text-format',
              version: '1.0.15',
              settings: {
                graph: {
                  events: {
                    data: {
                      landerFieldMarker: {
                        type: 'eventHandler'
                      }
                    }
                  },
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  fontSize: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  vertical: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  fontColor: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  formatter: {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  horizontal: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  textWeight: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'formatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                values: {
                  value:
                    '<ul style="padding-left: 20px; margin-bottom: 0;"><li style="list-style-type:disc;">接口<b style="color:red">只支持sql接口类型，该接口需要业务方自己提供</b><div>',
                  events: [],
                  fontSize: 12,
                  fontColor: 'rgb(137, 139, 143)',
                  formatter: {
                    extra: [],
                    prefix: [],
                    suffix: [],
                    dataType: 'HTML'
                  },
                  textWeight: 0
                }
              },
              materialId: 6203,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-text-format/1.0.15/dist/setting.umd.js',
              materialType: 0,
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: '1db9cb92-f7bb-4b4b-b562-253e69bce737',
            zIndex: 1,
            children: [],
            isLocked: false,
            component: '@ecom/lander-text-format',
            moduleType: 'components',
            relativePosition: {
              top: 2,
              left: 0,
              right: 0,
              bottom: 101
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: 'e99df27a-b0d7-477c-ab6b-b95652d033fe',
        componentName: '@ecom/lander-text-format'
      },
      {
        data: {
          value: {
            id: '11e84339-352e-498a-a6fb-2c23b4b11727',
            data: {
              name: 'template_button2',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl: 'https://unpkg.byted-static.com/ecom/lander-button/1.0.9/dist/index.umd.js',
              context: {
                size: {
                  width: 200,
                  height: 100,
                  widthType: 'fit',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: 'transparent',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-button',
              version: '1.0.9',
              settings: {
                graph: {
                  size: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  type: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  ghost: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  shape: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  danger: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  events: {
                    data: {
                      landerFieldMarker: {
                        type: 'eventHandler'
                      }
                    }
                  },
                  content: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  disabled: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  iconType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  isLoading: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  rightIconType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.fontSize': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'moreStyle.0.fontColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.iconColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.fontWeight': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'moreStyle.0.lineHeight': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'moreStyle.0.borderColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.fontMaxWidth': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'moreStyle.0.fontHoverColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.overflowHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  }
                },
                values: {
                  size: 'middle',
                  type: 'primary',
                  ghost: false,
                  shape: 'none',
                  danger: false,
                  events: [
                    {
                      event: 'Click',
                      action: 'Export',
                      method: 'Trigger',
                      target: 'template_sql1',
                      fileName: "{{'导出至飞书文件'}}",
                      component: 'protable3',
                      fileFormat: 'feishu',
                      messageType: '',
                      messageTitle: '',
                      messageContent: ''
                    }
                  ],
                  content: '点击导出至飞书',
                  disabled: false,
                  isLoading: false,
                  moreStyle: [
                    {
                      lineHeight: 18
                    }
                  ],
                  __lander_addon: {
                    list: []
                  }
                }
              },
              materialId: 6079,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-button/1.0.9/dist/setting.umd.js',
              materialType: 0,
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: '12fc7c08-fdb4-4938-99f6-b5d583034e20',
            zIndex: 1,
            children: [],
            isLocked: false,
            component: '@ecom/lander-button',
            moduleType: 'components',
            relativePosition: {
              top: 66,
              left: 91,
              right: 987,
              bottom: 320
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: '11e84339-352e-498a-a6fb-2c23b4b11727',
        componentName: '@ecom/lander-button'
      },
      {
        data: {
          value: {
            id: '5c9227c6-3b00-4c37-a441-4e942af40c69',
            data: {
              name: 'template_button1',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl: 'https://unpkg.byted-static.com/ecom/lander-button/1.0.9/dist/index.umd.js',
              context: {
                size: {
                  width: 200,
                  height: 100,
                  widthType: 'fit',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: 'transparent',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-button',
              version: '1.0.9',
              settings: {
                graph: {
                  size: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  type: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  ghost: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  shape: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  danger: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  events: {
                    data: {
                      landerFieldMarker: {
                        type: 'eventHandler'
                      }
                    }
                  },
                  content: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  disabled: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  iconType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  isLoading: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  rightIconType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.fontSize': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'moreStyle.0.fontColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.iconColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.fontWeight': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'moreStyle.0.lineHeight': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'moreStyle.0.borderColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.fontMaxWidth': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'moreStyle.0.fontHoverColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.overflowHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  }
                },
                values: {
                  size: 'middle',
                  type: 'primary',
                  ghost: false,
                  shape: 'none',
                  danger: false,
                  events: [
                    {
                      event: 'Click',
                      action: 'Export',
                      method: 'Trigger',
                      target: 'template_sql1',
                      fileName: "{{'导出至Excel'}}",
                      component: 'protable2',
                      fileFormat: 'excel',
                      messageType: '',
                      messageTitle: '',
                      messageContent: ''
                    }
                  ],
                  content: '点击导出至excel',
                  disabled: false,
                  isLoading: false,
                  moreStyle: [
                    {
                      lineHeight: 18
                    }
                  ],
                  __lander_addon: {
                    list: []
                  }
                }
              },
              materialId: 6079,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-button/1.0.9/dist/setting.umd.js',
              materialType: 0,
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: '8250cdec-7ee3-4f86-9475-7f3907f2989f',
            zIndex: 1,
            children: [],
            isLocked: false,
            component: '@ecom/lander-button',
            moduleType: 'components',
            relativePosition: {
              top: 66,
              left: 91,
              right: 987,
              bottom: 320
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: '5c9227c6-3b00-4c37-a441-4e942af40c69',
        componentName: '@ecom/lander-button'
      },
      {
        data: {
          value: {
            id: 'f3fe2244-2f6b-4f7e-849a-261ab31ba340',
            data: {
              name: 'template_textFormat4',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl:
                'https://unpkg.byted-static.com/ecom/lander-text-format/1.0.15/dist/index.umd.js',
              context: {
                size: {
                  width: 1,
                  height: 100,
                  widthType: 'fill',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: 'transparent',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-text-format',
              version: '1.0.15',
              settings: {
                graph: {
                  events: {
                    data: {
                      landerFieldMarker: {
                        type: 'eventHandler'
                      }
                    }
                  },
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  fontSize: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  vertical: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  fontColor: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  formatter: {
                    data: {
                      landerFieldMarker: {
                        type: 'self',
                        pathType: 'FormatFunction'
                      }
                    }
                  },
                  horizontal: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  textWeight: {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'formatter.dataType': {
                    data: {
                      landerType: ['string']
                    }
                  }
                },
                values: {
                  value:
                    '<ul style="padding-left: 20px; margin-bottom: 0; width:100%"><li style="list-style-type:disc;">可参考代码模块中<b style=\'color: red\'>getCurrentSelectedData</b>获取当前选中的行的商家名称：{{JSON.stringify(getCurrentSelectedData?.data || [])}}</li><ul>',
                  events: [],
                  fontSize: 12,
                  fontColor: 'rgb(137, 139, 143)',
                  formatter: {
                    extra: [],
                    prefix: [],
                    suffix: [],
                    dataType: 'HTML'
                  },
                  textWeight: 0
                }
              },
              materialId: 6203,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-text-format/1.0.15/dist/setting.umd.js',
              materialType: 0,
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: '1db9cb92-f7bb-4b4b-b562-253e69bce737',
            zIndex: 1,
            children: [],
            isLocked: false,
            component: '@ecom/lander-text-format',
            moduleType: 'components',
            relativePosition: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: 'f3fe2244-2f6b-4f7e-849a-261ab31ba340',
        componentName: '@ecom/lander-text-format'
      },
      {
        data: {
          value: {
            id: 'ff3acf9d-f117-4458-84c5-4f7e6705c42c',
            data: {
              name: 'template_button3',
              sticky: {
                top: 0,
                enable: false,
                absolute: false
              },
              umdUrl: 'https://unpkg.byted-static.com/ecom/lander-button/1.0.9/dist/index.umd.js',
              context: {
                size: {
                  width: 200,
                  height: 100,
                  widthType: 'fit',
                  heightType: 'fit'
                },
                overflow: 'hidden',
                constrain: {
                  top: true,
                  left: true,
                  right: false,
                  bottom: false
                },
                borderColor: 'transparent',
                borderStyle: 'solid',
                borderWidth: 0,
                stackConfig: {
                  gap: 16,
                  display: 'flex',
                  padding: 0,
                  flexWrap: false,
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                },
                borderRadius: 0,
                backgroundColor: 'transparent',
                preserveAspectRatio: false
              },
              pkgName: '@ecom/lander-button',
              version: '1.0.9',
              settings: {
                graph: {
                  size: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  type: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  ghost: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  shape: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  danger: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  events: {
                    data: {
                      landerFieldMarker: {
                        type: 'eventHandler'
                      }
                    }
                  },
                  content: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  visible: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  disabled: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  iconType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  isLoading: {
                    data: {
                      landerType: ['boolean']
                    }
                  },
                  rightIconType: {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.fontSize': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'moreStyle.0.fontColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.iconColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.fontWeight': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'moreStyle.0.lineHeight': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'moreStyle.0.borderColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.fontMaxWidth': {
                    data: {
                      landerType: ['number']
                    }
                  },
                  'moreStyle.0.fontHoverColor': {
                    data: {
                      landerType: ['string']
                    }
                  },
                  'moreStyle.0.overflowHidden': {
                    data: {
                      landerType: ['boolean']
                    }
                  }
                },
                values: {
                  size: 'small',
                  type: 'link',
                  ghost: false,
                  shape: 'none',
                  danger: false,
                  events: [
                    {
                      url: 'https://lander.bytedance.net/doc-pro/43oewtau/ch6mirbq?_lang=zh',
                      event: 'Click',
                      action: 'Go to URL',
                      method: 'Trigger'
                    }
                  ],
                  content: '使用文档',
                  disabled: false,
                  iconType: 'Daochujilu',
                  isLoading: false,
                  moreStyle: [
                    {
                      lineHeight: 18
                    }
                  ],
                  __lander_addon: {
                    list: []
                  }
                }
              },
              materialId: 6079,
              settingUrl:
                'https://unpkg.byted-static.com/ecom/lander-button/1.0.9/dist/setting.umd.js',
              materialType: 0,
              stateProperties: {}
            },
            shape: 'react-shape',
            parent: '5bdca8b0-52dc-45e8-bff1-46430af17da8',
            zIndex: 2,
            children: [],
            isLocked: false,
            component: '@ecom/lander-button',
            moduleType: 'components',
            relativePosition: {
              top: 61,
              left: 445,
              right: -519,
              bottom: -79
            }
          }
        },
        pageId: 'If-_Rg84wIeA',
        componentKey: 'ff3acf9d-f117-4458-84c5-4f7e6705c42c',
        componentName: '@ecom/lander-button'
      }
    ]
  }
}

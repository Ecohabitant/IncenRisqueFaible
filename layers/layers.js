var wms_layers = [];

var lyr_Riesgo_incendio_Debil_TR_0 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Riesgo_incendio_Debil_TR',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Riesgo_incendio_Debil_TR_0.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8101847.482144, 5820466.743875, -8060354.762138, 5856046.545020]
                            })
                        });

lyr_Riesgo_incendio_Debil_TR_0.setVisible(true);
var layersList = [lyr_Riesgo_incendio_Debil_TR_0];

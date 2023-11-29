var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Alpinespaceborder_1 = new ol.format.GeoJSON();
var features_Alpinespaceborder_1 = format_Alpinespaceborder_1.readFeatures(json_Alpinespaceborder_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alpinespaceborder_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alpinespaceborder_1.addFeatures(features_Alpinespaceborder_1);
var lyr_Alpinespaceborder_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Alpinespaceborder_1, 
                style: style_Alpinespaceborder_1,
                interactive: false,
                title: '<img src="styles/legend/Alpinespaceborder_1.png" /> Alpine space border'
            });
var format_par01_area2_FRF1_2 = new ol.format.GeoJSON();
var features_par01_area2_FRF1_2 = format_par01_area2_FRF1_2.readFeatures(json_par01_area2_FRF1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_par01_area2_FRF1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_par01_area2_FRF1_2.addFeatures(features_par01_area2_FRF1_2);
var lyr_par01_area2_FRF1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_par01_area2_FRF1_2, 
                style: style_par01_area2_FRF1_2,
                interactive: true,
                title: '<img src="styles/legend/par01_area2_FRF1_2.png" /> par01_area2_FRF1'
            });
var format_par02_road_network_3 = new ol.format.GeoJSON();
var features_par02_road_network_3 = format_par02_road_network_3.readFeatures(json_par02_road_network_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_par02_road_network_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_par02_road_network_3.addFeatures(features_par02_road_network_3);
var lyr_par02_road_network_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_par02_road_network_3, 
                style: style_par02_road_network_3,
                interactive: false,
                title: '<img src="styles/legend/par02_road_network_3.png" /> par02_road_network'
            });
var format_par03_tent_network_4 = new ol.format.GeoJSON();
var features_par03_tent_network_4 = format_par03_tent_network_4.readFeatures(json_par03_tent_network_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_par03_tent_network_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_par03_tent_network_4.addFeatures(features_par03_tent_network_4);
var lyr_par03_tent_network_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_par03_tent_network_4, 
                style: style_par03_tent_network_4,
                interactive: true,
                title: '<img src="styles/legend/par03_tent_network_4.png" /> par03_tent_network'
            });
var format_par04_road_delivery_network_5 = new ol.format.GeoJSON();
var features_par04_road_delivery_network_5 = format_par04_road_delivery_network_5.readFeatures(json_par04_road_delivery_network_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_par04_road_delivery_network_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_par04_road_delivery_network_5.addFeatures(features_par04_road_delivery_network_5);
var lyr_par04_road_delivery_network_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_par04_road_delivery_network_5, 
                style: style_par04_road_delivery_network_5,
                interactive: true,
                title: '<img src="styles/legend/par04_road_delivery_network_5.png" /> par04_road_delivery_network'
            });
var format_gasnetwork_6 = new ol.format.GeoJSON();
var features_gasnetwork_6 = format_gasnetwork_6.readFeatures(json_gasnetwork_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gasnetwork_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gasnetwork_6.addFeatures(features_gasnetwork_6);
var lyr_gasnetwork_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gasnetwork_6, 
                style: style_gasnetwork_6,
                interactive: true,
                title: '<img src="styles/legend/gasnetwork_6.png" /> gas network'
            });
var format_par06_production_7 = new ol.format.GeoJSON();
var features_par06_production_7 = format_par06_production_7.readFeatures(json_par06_production_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_par06_production_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_par06_production_7.addFeatures(features_par06_production_7);
var lyr_par06_production_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_par06_production_7, 
                style: style_par06_production_7,
                interactive: true,
                title: '<img src="styles/legend/par06_production_7.png" /> par06_production'
            });
var format_par07_stations_8 = new ol.format.GeoJSON();
var features_par07_stations_8 = format_par07_stations_8.readFeatures(json_par07_stations_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_par07_stations_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_par07_stations_8.addFeatures(features_par07_stations_8);
var lyr_par07_stations_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_par07_stations_8, 
                style: style_par07_stations_8,
                interactive: true,
    title: 'par07_stations<br />\
    <img src="styles/legend/par07_stations_8_0.png" /> existing<br />\
    <img src="styles/legend/par07_stations_8_1.png" /> planned<br />\
    <img src="styles/legend/par07_stations_8_2.png" /> <br />'
        });
var format_par08_tent_stations_9 = new ol.format.GeoJSON();
var features_par08_tent_stations_9 = format_par08_tent_stations_9.readFeatures(json_par08_tent_stations_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_par08_tent_stations_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_par08_tent_stations_9.addFeatures(features_par08_tent_stations_9);
var lyr_par08_tent_stations_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_par08_tent_stations_9, 
                style: style_par08_tent_stations_9,
                interactive: true,
                title: '<img src="styles/legend/par08_tent_stations_9.png" /> par08_tent_stations'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Alpinespaceborder_1.setVisible(true);lyr_par01_area2_FRF1_2.setVisible(true);lyr_par02_road_network_3.setVisible(false);lyr_par03_tent_network_4.setVisible(true);lyr_par04_road_delivery_network_5.setVisible(true);lyr_gasnetwork_6.setVisible(true);lyr_par06_production_7.setVisible(true);lyr_par07_stations_8.setVisible(true);lyr_par08_tent_stations_9.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Alpinespaceborder_1,lyr_par01_area2_FRF1_2,lyr_par02_road_network_3,lyr_par03_tent_network_4,lyr_par04_road_delivery_network_5,lyr_gasnetwork_6,lyr_par06_production_7,lyr_par07_stations_8,lyr_par08_tent_stations_9];
lyr_Alpinespaceborder_1.set('fieldAliases', {'NUTS_ID': 'NUTS_ID', 'LEVL_CODE': 'LEVL_CODE', 'CNTR_CODE': 'CNTR_CODE', 'NAME_LATN': 'NAME_LATN', 'NUTS_NAME': 'NUTS_NAME', 'MOUNT_TYPE': 'MOUNT_TYPE', 'URBN_TYPE': 'URBN_TYPE', 'COAST_TYPE': 'COAST_TYPE', 'FID': 'FID', });
lyr_par01_area2_FRF1_2.set('fieldAliases', {'NUTS_ID': 'NUTS_ID', 'LEVL_CODE': 'LEVL_CODE', 'CNTR_CODE': 'CNTR_CODE', 'NAME_LATN': 'NAME_LATN', 'NUTS_NAME': 'NUTS_NAME', 'MOUNT_TYPE': 'MOUNT_TYPE', 'URBN_TYPE': 'URBN_TYPE', 'COAST_TYPE': 'COAST_TYPE', 'FID': 'FID', 'SUBAREA': 'SUBAREA', });
lyr_par02_road_network_3.set('fieldAliases', {'nature': 'nature', 'nom_collab': 'nom_collab', 'importance': 'importance', 'SUBAREA': 'SUBAREA', });
lyr_par03_tent_network_4.set('fieldAliases', {'SUBAREA': 'SUBAREA', });
lyr_par04_road_delivery_network_5.set('fieldAliases', {'nature': 'nature', 'nom_collab': 'nom_collab', 'importance': 'importance', 'SUBAREA': 'SUBAREA', });
lyr_gasnetwork_6.set('fieldAliases', {'objectid': 'objectid', 'nom_region': 'nom_region', 'departemen': 'departemen', 'subarea': 'subarea', 'layer': 'layer', 'path': 'path', });
lyr_par06_production_7.set('fieldAliases', {'id': 'id', 'capacity': 'capacity', 'connect_pl': 'connect_pl', 'conn_hrs': 'conn_hrs', 'status': 'status', 'prod_type': 'prod_type', 'el_capacit': 'el_capacit', 'year': 'year', 'operator': 'operator', 'subarea': 'subarea', });
lyr_par07_stations_8.set('fieldAliases', {'Status': 'Status', 'id': 'id', 'capacity': 'capacity', 'exp_vehic': 'exp_vehic', 'tent_dist': 'tent_dist', 'H2p_conn': 'H2p_conn', 'disp_cap': 'disp_cap', 'place': 'place', 'subarea': 'subarea', });
lyr_par08_tent_stations_9.set('fieldAliases', {'FID': 'FID', 'subarea': 'subarea', 'tent_dist': 'tent_dist', });
lyr_Alpinespaceborder_1.set('fieldImages', {'NUTS_ID': '', 'LEVL_CODE': '', 'CNTR_CODE': '', 'NAME_LATN': '', 'NUTS_NAME': '', 'MOUNT_TYPE': '', 'URBN_TYPE': '', 'COAST_TYPE': '', 'FID': '', });
lyr_par01_area2_FRF1_2.set('fieldImages', {'NUTS_ID': '', 'LEVL_CODE': '', 'CNTR_CODE': '', 'NAME_LATN': '', 'NUTS_NAME': '', 'MOUNT_TYPE': '', 'URBN_TYPE': '', 'COAST_TYPE': '', 'FID': '', 'SUBAREA': '', });
lyr_par02_road_network_3.set('fieldImages', {'nature': '', 'nom_collab': '', 'importance': '', 'SUBAREA': '', });
lyr_par03_tent_network_4.set('fieldImages', {'SUBAREA': '', });
lyr_par04_road_delivery_network_5.set('fieldImages', {'nature': '', 'nom_collab': '', 'importance': '', 'SUBAREA': '', });
lyr_gasnetwork_6.set('fieldImages', {'objectid': '', 'nom_region': '', 'departemen': '', 'subarea': '', 'layer': '', 'path': '', });
lyr_par06_production_7.set('fieldImages', {'id': '', 'capacity': '', 'connect_pl': '', 'conn_hrs': '', 'status': '', 'prod_type': '', 'el_capacit': '', 'year': '', 'operator': '', 'subarea': '', });
lyr_par07_stations_8.set('fieldImages', {'Status': '', 'id': '', 'capacity': '', 'exp_vehic': '', 'tent_dist': '', 'H2p_conn': '', 'disp_cap': '', 'place': '', 'subarea': '', });
lyr_par08_tent_stations_9.set('fieldImages', {'FID': '', 'subarea': '', 'tent_dist': '', });
lyr_Alpinespaceborder_1.set('fieldLabels', {'NUTS_ID': 'no label', 'LEVL_CODE': 'no label', 'CNTR_CODE': 'no label', 'NAME_LATN': 'no label', 'NUTS_NAME': 'no label', 'MOUNT_TYPE': 'no label', 'URBN_TYPE': 'no label', 'COAST_TYPE': 'no label', 'FID': 'no label', });
lyr_par01_area2_FRF1_2.set('fieldLabels', {'NUTS_ID': 'no label', 'LEVL_CODE': 'no label', 'CNTR_CODE': 'no label', 'NAME_LATN': 'no label', 'NUTS_NAME': 'no label', 'MOUNT_TYPE': 'no label', 'URBN_TYPE': 'no label', 'COAST_TYPE': 'no label', 'FID': 'no label', 'SUBAREA': 'no label', });
lyr_par02_road_network_3.set('fieldLabels', {'nature': 'no label', 'nom_collab': 'no label', 'importance': 'no label', 'SUBAREA': 'no label', });
lyr_par03_tent_network_4.set('fieldLabels', {'SUBAREA': 'no label', });
lyr_par04_road_delivery_network_5.set('fieldLabels', {'nature': 'no label', 'nom_collab': 'no label', 'importance': 'no label', 'SUBAREA': 'no label', });
lyr_gasnetwork_6.set('fieldLabels', {'objectid': 'no label', 'nom_region': 'no label', 'departemen': 'no label', 'subarea': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_par06_production_7.set('fieldLabels', {'id': 'no label', 'capacity': 'no label', 'connect_pl': 'no label', 'conn_hrs': 'no label', 'status': 'no label', 'prod_type': 'no label', 'el_capacit': 'no label', 'year': 'no label', 'operator': 'no label', 'subarea': 'no label', });
lyr_par07_stations_8.set('fieldLabels', {'Status': 'no label', 'id': 'no label', 'capacity': 'no label', 'exp_vehic': 'no label', 'tent_dist': 'no label', 'H2p_conn': 'no label', 'disp_cap': 'no label', 'place': 'no label', 'subarea': 'no label', });
lyr_par08_tent_stations_9.set('fieldLabels', {'FID': 'no label', 'subarea': 'no label', 'tent_dist': 'no label', });
lyr_par08_tent_stations_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
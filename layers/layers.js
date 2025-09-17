var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ClasificacionNoSupervisada_1 = new ol.format.GeoJSON();
var features_ClasificacionNoSupervisada_1 = format_ClasificacionNoSupervisada_1.readFeatures(json_ClasificacionNoSupervisada_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacionNoSupervisada_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacionNoSupervisada_1.addFeatures(features_ClasificacionNoSupervisada_1);
var lyr_ClasificacionNoSupervisada_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacionNoSupervisada_1, 
                style: style_ClasificacionNoSupervisada_1,
                popuplayertitle: 'Clasificacion No Supervisada',
                interactive: false,
    title: 'Clasificacion No Supervisada<br />\
    <img src="styles/legend/ClasificacionNoSupervisada_1_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/ClasificacionNoSupervisada_1_1.png" /> AREA NO CULTIVADA<br />' });
var format_PoligonosProductor_2 = new ol.format.GeoJSON();
var features_PoligonosProductor_2 = format_PoligonosProductor_2.readFeatures(json_PoligonosProductor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoligonosProductor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonosProductor_2.addFeatures(features_PoligonosProductor_2);
var lyr_PoligonosProductor_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonosProductor_2, 
                style: style_PoligonosProductor_2,
                popuplayertitle: 'Poligonos Productor',
                interactive: false,
                title: '<img src="styles/legend/PoligonosProductor_2.png" /> Poligonos Productor'
            });
var format_PoligonosPorRevisar_3 = new ol.format.GeoJSON();
var features_PoligonosPorRevisar_3 = format_PoligonosPorRevisar_3.readFeatures(json_PoligonosPorRevisar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoligonosPorRevisar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonosPorRevisar_3.addFeatures(features_PoligonosPorRevisar_3);
var lyr_PoligonosPorRevisar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonosPorRevisar_3, 
                style: style_PoligonosPorRevisar_3,
                popuplayertitle: 'Poligonos Por Revisar',
                interactive: false,
                title: '<img src="styles/legend/PoligonosPorRevisar_3.png" /> Poligonos Por Revisar'
            });
var format_UbicacionProductor_4 = new ol.format.GeoJSON();
var features_UbicacionProductor_4 = format_UbicacionProductor_4.readFeatures(json_UbicacionProductor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UbicacionProductor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UbicacionProductor_4.addFeatures(features_UbicacionProductor_4);
cluster_UbicacionProductor_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_UbicacionProductor_4
});
var lyr_UbicacionProductor_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_UbicacionProductor_4, 
                style: style_UbicacionProductor_4,
                popuplayertitle: 'Ubicacion Productor',
                interactive: true,
    title: 'Ubicacion Productor<br />\
    <img src="styles/legend/UbicacionProductor_4_0.png" /> NO_ENCONTRADO<br />\
    <img src="styles/legend/UbicacionProductor_4_1.png" /> VALIDADO<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_ClasificacionNoSupervisada_1.setVisible(true);lyr_PoligonosProductor_2.setVisible(true);lyr_PoligonosPorRevisar_3.setVisible(true);lyr_UbicacionProductor_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ClasificacionNoSupervisada_1,lyr_PoligonosProductor_2,lyr_PoligonosPorRevisar_3,lyr_UbicacionProductor_4];
lyr_ClasificacionNoSupervisada_1.set('fieldAliases', {'cod_clas': 'cod_clas', 'SUPER': 'SUPER', 'cod_area': 'cod_area', 'area_ha': 'area_ha', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'ciu_com': 'ciu_com', 'cultivo': 'cultivo', 'perimeter': 'perimeter', });
lyr_PoligonosProductor_2.set('fieldAliases', {'rowid': 'rowid', 'id_poligono': 'id_poligono', 'cod_depto': 'cod_depto', 'depto': 'depto', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'ord_mun': 'ord_mun', 'ag_unico': 'ag_unico', 'ae_unico': 'ae_unico', 'aba_unico': 'aba_unico', 'id_productor': 'id_productor', 'estado_validacion': 'estado_validacion', 'registrado_por': 'registrado_por', 'fecha_registro': 'fecha_registro', 'json_modificaciones': 'json_modificaciones', 'modificado_por': 'modificado_por', 'ultima_modificacion': 'ultima_modificacion', 'fecha_sincronizacion': 'fecha_sincronizacion', 'sync_con_marco_lista': 'sync_con_marco_lista', 'observaciones': 'observaciones', 'tipo_de_poligono': 'tipo_de_poligono', });
lyr_PoligonosPorRevisar_3.set('fieldAliases', {'gid': 'gid', 'id_pol': 'id_pol', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'cod_ae': 'cod_ae', 'cod_aba': 'cod_aba', 'ag_unico': 'ag_unico', 'ae_unico': 'ae_unico', 'aba_unico': 'aba_unico', 'nombre': 'nombre', 'paterno': 'paterno', 'materno': 'materno', 'ci': 'ci', 'telf': 'telf', 'rubro': 'rubro', 'prod_estab': 'prod_estab', 'grupo_pol': 'grupo_pol', 'est_sispro': 'est_sispro', 'descargado': 'descargado', 'rubro_pec': 'rubro_pec', 'bov': 'bov', 'buf': 'buf', 'lla': 'lla', 'alp': 'alp', 'ovi': 'ovi', 'cap': 'cap', 'por': 'por', 'avt': 'avt', 'av': 'av', 'cant_gan': 'cant_gan', 'clas_pec': 'clas_pec', 'clatitinra': 'clatitinra', 'certf_inra': 'certf_inra', 'comunidad': 'comunidad', 'clasf_inra': 'clasf_inra', 'fetit_inra': 'fetit_inra', 'pol_ini': 'pol_ini', 'pol_cmpo': 'pol_cmpo', 'id_prod': 'id_prod', 'tipo_d_pol': 'tipo_d_pol', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'bck_id_pol': 'bck_id_pol', 'id_pol_mod': 'id_pol_mod', });
lyr_UbicacionProductor_4.set('fieldAliases', {'rowid': 'rowid', 'id_product': 'id_product', 'estado_val': 'estado_val', 'prod_estab': 'prod_estab', 'id_ubicaci': 'id_ubicaci', 'id_poligon': 'id_poligon', 'estado_ubi': 'estado_ubi', 'cuestionar': 'cuestionar', 'depto': 'depto', 'mpio': 'mpio', 'ciu_com': 'ciu_com', 'name': 'name', });
lyr_ClasificacionNoSupervisada_1.set('fieldImages', {'cod_clas': 'TextEdit', 'SUPER': 'TextEdit', 'cod_area': 'TextEdit', 'area_ha': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'ciu_com': 'TextEdit', 'cultivo': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_PoligonosProductor_2.set('fieldImages', {'rowid': 'TextEdit', 'id_poligono': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'ord_mun': 'TextEdit', 'ag_unico': 'TextEdit', 'ae_unico': 'TextEdit', 'aba_unico': 'TextEdit', 'id_productor': 'TextEdit', 'estado_validacion': 'TextEdit', 'registrado_por': 'TextEdit', 'fecha_registro': 'DateTime', 'json_modificaciones': 'TextEdit', 'modificado_por': 'TextEdit', 'ultima_modificacion': 'DateTime', 'fecha_sincronizacion': 'DateTime', 'sync_con_marco_lista': 'TextEdit', 'observaciones': 'TextEdit', 'tipo_de_poligono': 'TextEdit', });
lyr_PoligonosPorRevisar_3.set('fieldImages', {'gid': 'TextEdit', 'id_pol': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'cod_ae': 'TextEdit', 'cod_aba': 'TextEdit', 'ag_unico': 'TextEdit', 'ae_unico': 'TextEdit', 'aba_unico': 'TextEdit', 'nombre': 'TextEdit', 'paterno': 'TextEdit', 'materno': 'TextEdit', 'ci': 'TextEdit', 'telf': 'TextEdit', 'rubro': 'TextEdit', 'prod_estab': 'TextEdit', 'grupo_pol': 'TextEdit', 'est_sispro': 'TextEdit', 'descargado': 'TextEdit', 'rubro_pec': 'TextEdit', 'bov': 'TextEdit', 'buf': 'TextEdit', 'lla': 'TextEdit', 'alp': 'TextEdit', 'ovi': 'TextEdit', 'cap': 'TextEdit', 'por': 'TextEdit', 'avt': 'TextEdit', 'av': 'TextEdit', 'cant_gan': 'TextEdit', 'clas_pec': 'TextEdit', 'clatitinra': 'TextEdit', 'certf_inra': 'TextEdit', 'comunidad': 'TextEdit', 'clasf_inra': 'TextEdit', 'fetit_inra': 'TextEdit', 'pol_ini': 'TextEdit', 'pol_cmpo': 'TextEdit', 'id_prod': 'TextEdit', 'tipo_d_pol': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'bck_id_pol': 'TextEdit', 'id_pol_mod': 'TextEdit', });
lyr_UbicacionProductor_4.set('fieldImages', {'rowid': 'TextEdit', 'id_product': 'TextEdit', 'estado_val': 'TextEdit', 'prod_estab': 'TextEdit', 'id_ubicaci': 'TextEdit', 'id_poligon': 'TextEdit', 'estado_ubi': 'TextEdit', 'cuestionar': 'TextEdit', 'depto': 'TextEdit', 'mpio': 'TextEdit', 'ciu_com': 'TextEdit', 'name': 'TextEdit', });
lyr_ClasificacionNoSupervisada_1.set('fieldLabels', {'cod_clas': 'no label', 'SUPER': 'no label', 'cod_area': 'no label', 'area_ha': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'ciu_com': 'no label', 'cultivo': 'no label', 'perimeter': 'no label', });
lyr_PoligonosProductor_2.set('fieldLabels', {'rowid': 'no label', 'id_poligono': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'ord_mun': 'no label', 'ag_unico': 'no label', 'ae_unico': 'no label', 'aba_unico': 'no label', 'id_productor': 'no label', 'estado_validacion': 'no label', 'registrado_por': 'no label', 'fecha_registro': 'no label', 'json_modificaciones': 'no label', 'modificado_por': 'no label', 'ultima_modificacion': 'no label', 'fecha_sincronizacion': 'no label', 'sync_con_marco_lista': 'no label', 'observaciones': 'no label', 'tipo_de_poligono': 'no label', });
lyr_PoligonosPorRevisar_3.set('fieldLabels', {'gid': 'no label', 'id_pol': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'cod_ae': 'no label', 'cod_aba': 'no label', 'ag_unico': 'no label', 'ae_unico': 'no label', 'aba_unico': 'no label', 'nombre': 'no label', 'paterno': 'no label', 'materno': 'no label', 'ci': 'no label', 'telf': 'no label', 'rubro': 'no label', 'prod_estab': 'no label', 'grupo_pol': 'no label', 'est_sispro': 'no label', 'descargado': 'no label', 'rubro_pec': 'no label', 'bov': 'no label', 'buf': 'no label', 'lla': 'no label', 'alp': 'no label', 'ovi': 'no label', 'cap': 'no label', 'por': 'no label', 'avt': 'no label', 'av': 'no label', 'cant_gan': 'no label', 'clas_pec': 'no label', 'clatitinra': 'no label', 'certf_inra': 'no label', 'comunidad': 'no label', 'clasf_inra': 'no label', 'fetit_inra': 'no label', 'pol_ini': 'no label', 'pol_cmpo': 'no label', 'id_prod': 'no label', 'tipo_d_pol': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'bck_id_pol': 'no label', 'id_pol_mod': 'no label', });
lyr_UbicacionProductor_4.set('fieldLabels', {'rowid': 'inline label - always visible', 'id_product': 'inline label - always visible', 'estado_val': 'inline label - always visible', 'prod_estab': 'inline label - always visible', 'id_ubicaci': 'inline label - always visible', 'id_poligon': 'inline label - always visible', 'estado_ubi': 'inline label - always visible', 'cuestionar': 'inline label - always visible', 'depto': 'inline label - always visible', 'mpio': 'inline label - always visible', 'ciu_com': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_UbicacionProductor_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
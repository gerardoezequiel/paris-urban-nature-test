var wms_layers = [];


        var lyr_EsriLightGray_0 = new ol.layer.Tile({
            'title': 'Esri Light Gray',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_admin_level_10_Paris_multipolygons_1 = new ol.format.GeoJSON();
var features_admin_level_10_Paris_multipolygons_1 = format_admin_level_10_Paris_multipolygons_1.readFeatures(json_admin_level_10_Paris_multipolygons_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admin_level_10_Paris_multipolygons_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admin_level_10_Paris_multipolygons_1.addFeatures(features_admin_level_10_Paris_multipolygons_1);
var lyr_admin_level_10_Paris_multipolygons_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_admin_level_10_Paris_multipolygons_1, 
                style: style_admin_level_10_Paris_multipolygons_1,
                interactive: true,
                title: '<img src="styles/legend/admin_level_10_Paris_multipolygons_1.png" /> admin_level_10_Paris_multipolygons'
            });
var format_18et19_2 = new ol.format.GeoJSON();
var features_18et19_2 = format_18et19_2.readFeatures(json_18et19_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18et19_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18et19_2.addFeatures(features_18et19_2);
var lyr_18et19_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_18et19_2, 
                style: style_18et19_2,
                interactive: true,
                title: '<img src="styles/legend/18et19_2.png" /> 18 et 19 '
            });
var format_MASK_3 = new ol.format.GeoJSON();
var features_MASK_3 = format_MASK_3.readFeatures(json_MASK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MASK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MASK_3.addFeatures(features_MASK_3);
var lyr_MASK_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MASK_3, 
                style: style_MASK_3,
                interactive: true,
                title: 'MASK'
            });
var format_Eau_4 = new ol.format.GeoJSON();
var features_Eau_4 = format_Eau_4.readFeatures(json_Eau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eau_4.addFeatures(features_Eau_4);
var lyr_Eau_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Eau_4, 
                style: style_Eau_4,
                interactive: true,
                title: '<img src="styles/legend/Eau_4.png" /> Eau'
            });
var format_ILOT_PHYSIQUE_5 = new ol.format.GeoJSON();
var features_ILOT_PHYSIQUE_5 = format_ILOT_PHYSIQUE_5.readFeatures(json_ILOT_PHYSIQUE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ILOT_PHYSIQUE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ILOT_PHYSIQUE_5.addFeatures(features_ILOT_PHYSIQUE_5);
var lyr_ILOT_PHYSIQUE_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ILOT_PHYSIQUE_5, 
                style: style_ILOT_PHYSIQUE_5,
                interactive: true,
                title: '<img src="styles/legend/ILOT_PHYSIQUE_5.png" /> ILOT_PHYSIQUE'
            });
var format_ProjectSecteurOperationnelParis_6 = new ol.format.GeoJSON();
var features_ProjectSecteurOperationnelParis_6 = format_ProjectSecteurOperationnelParis_6.readFeatures(json_ProjectSecteurOperationnelParis_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectSecteurOperationnelParis_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectSecteurOperationnelParis_6.addFeatures(features_ProjectSecteurOperationnelParis_6);
var lyr_ProjectSecteurOperationnelParis_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProjectSecteurOperationnelParis_6, 
                style: style_ProjectSecteurOperationnelParis_6,
                interactive: true,
    title: 'Project Secteur Operationnel Paris<br />\
    <img src="styles/legend/ProjectSecteurOperationnelParis_6_0.png" /> A<br />\
    <img src="styles/legend/ProjectSecteurOperationnelParis_6_1.png" /> E<br />\
    <img src="styles/legend/ProjectSecteurOperationnelParis_6_2.png" /> L<br />\
    <img src="styles/legend/ProjectSecteurOperationnelParis_6_3.png" /> M<br />\
    <img src="styles/legend/ProjectSecteurOperationnelParis_6_4.png" /> O<br />\
    <img src="styles/legend/ProjectSecteurOperationnelParis_6_5.png" /> Other<br />'
        });
var format_EquipementEmpriseEspaceVert_7 = new ol.format.GeoJSON();
var features_EquipementEmpriseEspaceVert_7 = format_EquipementEmpriseEspaceVert_7.readFeatures(json_EquipementEmpriseEspaceVert_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipementEmpriseEspaceVert_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipementEmpriseEspaceVert_7.addFeatures(features_EquipementEmpriseEspaceVert_7);
var lyr_EquipementEmpriseEspaceVert_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EquipementEmpriseEspaceVert_7, 
                style: style_EquipementEmpriseEspaceVert_7,
                interactive: true,
    title: 'Equipement Emprise Espace Vert<br />\
    <img src="styles/legend/EquipementEmpriseEspaceVert_7_0.png" /> Bois - Forêt<br />\
    <img src="styles/legend/EquipementEmpriseEspaceVert_7_1.png" /> Parc / Jardin / Square<br />\
    <img src="styles/legend/EquipementEmpriseEspaceVert_7_2.png" /> Jardin associatif, Jardin ouvrier, Jardin partagé, Jardin familial<br />\
    <img src="styles/legend/EquipementEmpriseEspaceVert_7_3.png" /> Parc Sportif Départemental/Interdépertemental<br />\
    <img src="styles/legend/EquipementEmpriseEspaceVert_7_4.png" /> Espace Vert des grandes institutions<br />\
    <img src="styles/legend/EquipementEmpriseEspaceVert_7_5.png" /> Pépinière<br />'
        });
var format_Espacesverts_8 = new ol.format.GeoJSON();
var features_Espacesverts_8 = format_Espacesverts_8.readFeatures(json_Espacesverts_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espacesverts_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espacesverts_8.addFeatures(features_Espacesverts_8);
var lyr_Espacesverts_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Espacesverts_8, 
                style: style_Espacesverts_8,
                interactive: true,
    title: 'Espaces verts<br />\
    <img src="styles/legend/Espacesverts_8_0.png" /> Bois<br />\
    <img src="styles/legend/Espacesverts_8_1.png" /> Cimetières<br />\
    <img src="styles/legend/Espacesverts_8_2.png" /> Jardinets décoratifs<br />\
    <img src="styles/legend/Espacesverts_8_3.png" /> Promenades ouvertes<br />'
        });
var format_Ilotsdefraicheurespacesvertsfrais_9 = new ol.format.GeoJSON();
var features_Ilotsdefraicheurespacesvertsfrais_9 = format_Ilotsdefraicheurespacesvertsfrais_9.readFeatures(json_Ilotsdefraicheurespacesvertsfrais_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ilotsdefraicheurespacesvertsfrais_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ilotsdefraicheurespacesvertsfrais_9.addFeatures(features_Ilotsdefraicheurespacesvertsfrais_9);
var lyr_Ilotsdefraicheurespacesvertsfrais_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ilotsdefraicheurespacesvertsfrais_9, 
                style: style_Ilotsdefraicheurespacesvertsfrais_9,
                interactive: true,
    title: 'Ilots de fraicheur espaces verts frais<br />\
    <img src="styles/legend/Ilotsdefraicheurespacesvertsfrais_9_0.png" /> Bois<br />\
    <img src="styles/legend/Ilotsdefraicheurespacesvertsfrais_9_1.png" /> Cimetières<br />\
    <img src="styles/legend/Ilotsdefraicheurespacesvertsfrais_9_2.png" /> Jardinets décoratifs<br />\
    <img src="styles/legend/Ilotsdefraicheurespacesvertsfrais_9_3.png" /> Promenades ouvertes<br />'
        });
var format_VertOSM_10 = new ol.format.GeoJSON();
var features_VertOSM_10 = format_VertOSM_10.readFeatures(json_VertOSM_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VertOSM_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VertOSM_10.addFeatures(features_VertOSM_10);
var lyr_VertOSM_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VertOSM_10, 
                style: style_VertOSM_10,
                interactive: true,
    title: 'Vert OSM<br />\
    <img src="styles/legend/VertOSM_10_0.png" /> forest<br />\
    <img src="styles/legend/VertOSM_10_1.png" /> grass<br />\
    <img src="styles/legend/VertOSM_10_2.png" /> greenhouse_horticulture<br />'
        });

lyr_EsriLightGray_0.setVisible(true);lyr_admin_level_10_Paris_multipolygons_1.setVisible(true);lyr_18et19_2.setVisible(true);lyr_MASK_3.setVisible(true);lyr_Eau_4.setVisible(true);lyr_ILOT_PHYSIQUE_5.setVisible(true);lyr_ProjectSecteurOperationnelParis_6.setVisible(true);lyr_EquipementEmpriseEspaceVert_7.setVisible(true);lyr_Espacesverts_8.setVisible(true);lyr_Ilotsdefraicheurespacesvertsfrais_9.setVisible(true);lyr_VertOSM_10.setVisible(true);
var layersList = [lyr_EsriLightGray_0,lyr_admin_level_10_Paris_multipolygons_1,lyr_18et19_2,lyr_MASK_3,lyr_Eau_4,lyr_ILOT_PHYSIQUE_5,lyr_ProjectSecteurOperationnelParis_6,lyr_EquipementEmpriseEspaceVert_7,lyr_Espacesverts_8,lyr_Ilotsdefraicheurespacesvertsfrais_9,lyr_VertOSM_10];
lyr_admin_level_10_Paris_multipolygons_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_level': 'admin_level', 'boundary': 'boundary', 'name': 'name', 'postal_code': 'postal_code', 'ref:TRIRIS': 'ref:TRIRIS', 'short_name': 'short_name', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'name:el': 'name:el', 'dog': 'dog', 'alt_name': 'alt_name', 'addr:postcode': 'addr:postcode', 'name:ar': 'name:ar', 'place': 'place', });
lyr_18et19_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'N_SQ_QU': 'N_SQ_QU', 'C_QU': 'C_QU', 'C_QUINSEE': 'C_QUINSEE', 'L_QU': 'L_QU', 'C_AR': 'C_AR', 'N_SQ_AR': 'N_SQ_AR', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_MASK_3.set('fieldAliases', {'osm_id': 'osm_id', 'class': 'class', 'type': 'type', 'name': 'name', 'address': 'address', 'extratags': 'extratags', });
lyr_Eau_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'N_SQ_PE': 'N_SQ_PE', 'L_EAU': 'L_EAU', 'C_DEP': 'C_DEP', 'C_NIVEAU': 'C_NIVEAU', 'B_VISI': 'B_VISI', 'N_SQ_DE': 'N_SQ_DE', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ILOT_PHYSIQUE_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'C_TYPE_IL': 'C_TYPE_IL', 'N_SQ_IP': 'N_SQ_IP', 'C_DEP': 'C_DEP', 'C_CAINSEE': 'C_CAINSEE', 'N_QU': 'N_QU', 'L_IP': 'L_IP', 'N_SQ_QU': 'N_SQ_QU', 'N_SQ_AR': 'N_SQ_AR', 'N_SQ_CO': 'N_SQ_CO', 'B_VISI': 'B_VISI', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ProjectSecteurOperationnelParis_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'l_nom_se_min': 'l_nom_se_min', 'l_co': 'l_co', 'l_epci': 'l_epci', 'c_ns': 'c_ns', 'c_ns_pru': 'c_ns_pru', 'c_av': 'c_av', 'an_p_r_achev': 'an_p_r_achev', 'm2_log': 'm2_log', 'm2_log_soc': 'm2_log_soc', 'm2_bur': 'm2_bur', 'm2_act': 'm2_act', 'm2_eq': 'm2_eq', 'm2_com': 'm2_com', 'm2_hot': 'm2_hot', 'm2_tot': 'm2_tot', 'm2_evp': 'm2_evp', 'nb_log': 'nb_log', 'nb_log_soc': 'nb_log_soc', 'l_moa': 'l_moa', 'l_moe': 'l_moe', 'd_maj': 'd_maj', 'an_cr_si': 'an_cr_si', 'an_en_tr': 'an_en_tr', 'c_source': 'c_source', 'l_comment': 'l_comment', 'nb_log_res': 'nb_log_res', 'nb_demol': 'nb_demol', 'b_actif': 'b_actif', 'b_plu': 'b_plu', 'c_vocation_dom': 'c_vocation_dom', 'nb_log_residuel': 'nb_log_residuel', 'nb_log_calc': 'nb_log_calc', 'm2_log_calc': 'm2_log_calc', 'm2_act_calc': 'm2_act_calc', 'm2_tot_calc': 'm2_tot_calc', 'c_gestion': 'c_gestion', 'c_moa': 'c_moa', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_EquipementEmpriseEspaceVert_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'n_sq_ee': 'n_sq_ee', 'c_cainsee': 'c_cainsee', 'c_niv1': 'c_niv1', 'c_niv2': 'c_niv2', 'c_niv3': 'c_niv3', 'b_avecpop': 'b_avecpop', 'l_ee_maj': 'l_ee_maj', 'l_ee_min': 'l_ee_min', 'b_visi': 'b_visi', 'n_sq_deq': 'n_sq_deq', 'b_local': 'b_local', 'b_territor': 'b_territor', 'b_metropol': 'b_metropol', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Espacesverts_8.set('fieldAliases', {'annee_ouverture': 'annee_ouverture', 'id_eqpt': 'id_eqpt', 'surface_horticole': 'surface_horticole', 'ouvert_ferme': 'ouvert_ferme', 'adresse_codepostal': 'adresse_codepostal', 'ida3d_enb': 'ida3d_enb', 'adresse_typevoie': 'adresse_typevoie', 'nb_entites': 'nb_entites', 'id_division': 'id_division', 'type_ev': 'type_ev', 'nsq_espace_vert': 'nsq_espace_vert', 'nom_ev': 'nom_ev', 'competence': 'competence', 'adresse_libellevoie': 'adresse_libellevoie', 'perimeter': 'perimeter', 'annee_renovation': 'annee_renovation', 'categorie': 'categorie', 'ancien_nom_ev': 'ancien_nom_ev', 'poly_area': 'poly_area', 'adresse_numero': 'adresse_numero', 'id_atelier_horticole': 'id_atelier_horticole', 'url_plan': 'url_plan', 'surface_totale_reelle': 'surface_totale_reelle', 'site_villes': 'site_villes', 'presence_cloture': 'presence_cloture', 'annee_changement_nom': 'annee_changement_nom', 'adresse_complement': 'adresse_complement', 'fraicheur_horaires_periode': 'fraicheur_horaires_periode', 'fraicheur_horaires_lundi': 'fraicheur_horaires_lundi', 'fraicheur_canicule_ouverture': 'fraicheur_canicule_ouverture', 'fraicheur_identifiant': 'fraicheur_identifiant', 'fraicheur_proportion_vegetation_haute': 'fraicheur_proportion_vegetation_haute', 'fraicheur_horaires_jeudi': 'fraicheur_horaires_jeudi', 'fraicheur_p_vegetation_h': 'fraicheur_p_vegetation_h', 'fraicheur_nsq_espace_vert': 'fraicheur_nsq_espace_vert', 'fraicheur_horaires_samedi': 'fraicheur_horaires_samedi', 'fraicheur_horaires_mardi': 'fraicheur_horaires_mardi', 'fraicheur_horaires_dimanche': 'fraicheur_horaires_dimanche', 'fraicheur_nom': 'fraicheur_nom', 'fraicheur_arrondissement': 'fraicheur_arrondissement', 'fraicheur_adresse': 'fraicheur_adresse', 'fraicheur_id_dicom': 'fraicheur_id_dicom', 'fraicheur_geo_point_2d': 'fraicheur_geo_point_2d', 'fraicheur_horaires_vendredi': 'fraicheur_horaires_vendredi', 'fraicheur_ouverture_estivale_nocturne': 'fraicheur_ouverture_estivale_nocturne', 'fraicheur_ouvert_24h': 'fraicheur_ouvert_24h', 'fraicheur_statut_ouverture': 'fraicheur_statut_ouverture', 'fraicheur_horaires_mercredi': 'fraicheur_horaires_mercredi', });
lyr_Ilotsdefraicheurespacesvertsfrais_9.set('fieldAliases', {'horaires_periode': 'horaires_periode', 'horaires_lundi': 'horaires_lundi', 'canicule_ouverture': 'canicule_ouverture', 'identifiant': 'identifiant', 'proportion_vegetation_haute': 'proportion_vegetation_haute', 'horaires_jeudi': 'horaires_jeudi', 'p_vegetation_h': 'p_vegetation_h', 'nsq_espace_vert': 'nsq_espace_vert', 'horaires_samedi': 'horaires_samedi', 'horaires_mardi': 'horaires_mardi', 'type': 'type', 'horaires_dimanche': 'horaires_dimanche', 'nom': 'nom', 'arrondissement': 'arrondissement', 'adresse': 'adresse', 'id_dicom': 'id_dicom', 'geo_point_2d': 'geo_point_2d', 'horaires_vendredi': 'horaires_vendredi', 'ouverture_estivale_nocturne': 'ouverture_estivale_nocturne', 'ouvert_24h': 'ouvert_24h', 'statut_ouverture': 'statut_ouverture', 'horaires_mercredi': 'horaires_mercredi', });
lyr_VertOSM_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'type': 'type', 'name': 'name', 'height': 'height', 'wikidata': 'wikidata', 'building': 'building', 'building:levels': 'building:levels', 'barrier': 'barrier', 'access': 'access', 'leisure': 'leisure', 'residential': 'residential', 'ref:FR:FANTOIR': 'ref:FR:FANTOIR', 'level': 'level', 'industrial': 'industrial', 'bicycle': 'bicycle', 'motor_vehicle': 'motor_vehicle', 'name:ja': 'name:ja', 'opening_hours': 'opening_hours', 'leaf_cycle': 'leaf_cycle', 'operator': 'operator', 'wikipedia': 'wikipedia', 'leaf_type': 'leaf_type', 'CLC:code': 'CLC:code', 'CLC:id': 'CLC:id', 'CLC:year': 'CLC:year', 'description': 'description', 'start_date': 'start_date', 'name:ca': 'name:ca', 'name:cs': 'name:cs', 'name:en': 'name:en', 'name:ru': 'name:ru', 'place': 'place', 'wikimedia_commons': 'wikimedia_commons', 'addr:city': 'addr:city', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'dog': 'dog', 'operator:wikidata': 'operator:wikidata', 'phone': 'phone', 'website': 'website', 'addr:housenumber': 'addr:housenumber', 'alt_name': 'alt_name', 'heritage': 'heritage', 'heritage:operator': 'heritage:operator', 'mhs:inscription_date': 'mhs:inscription_date', 'name:da': 'name:da', 'name:et': 'name:et', 'name:tr': 'name:tr', 'name:zh': 'name:zh', 'ref:mhs': 'ref:mhs', 'short_name': 'short_name', 'source:heritage': 'source:heritage', 'tourism': 'tourism', 'tourism:visitors': 'tourism:visitors', 'denomination': 'denomination', 'name:he': 'name:he', 'religion': 'religion', 'website:image': 'website:image', 'disused:amenity': 'disused:amenity', 'old_name': 'old_name', 'natural': 'natural', 'water': 'water', 'width': 'width', 'architect': 'architect', 'architect:wikidata': 'architect:wikidata', 'architect:wikipedia': 'architect:wikipedia', 'capacity': 'capacity', 'covered': 'covered', 'drinking_water': 'drinking_water', 'man_made': 'man_made', 'reservoir': 'reservoir', 'surface': 'surface', 'layer': 'layer', 'amenity': 'amenity', 'internet_access': 'internet_access', 'internet_access:fee': 'internet_access:fee', 'internet_access:operator': 'internet_access:operator', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'source:internet_access': 'source:internet_access', 'source:name': 'source:name', 'foot': 'foot', 'sport': 'sport', 'addr:housename': 'addr:housename', 'air_conditioning': 'air_conditioning', 'building:level:0': 'building:level:0', 'building:level:1': 'building:level:1', 'building:level:2': 'building:level:2', 'building:level:3': 'building:level:3', 'shop': 'shop', 'stroller': 'stroller', 'wall': 'wall', 'wheelchair': 'wheelchair', 'roof:material': 'roof:material', 'roof:shape': 'roof:shape', 'year_of_construction': 'year_of_construction', 'boat': 'boat', 'office': 'office', 'name:fr': 'name:fr', 'name:ko': 'name:ko', 'name:ar': 'name:ar', 'name:de': 'name:de', 'name:el': 'name:el', 'disused:landuse': 'disused:landuse', 'source:landuse': 'source:landuse', 'operator:type': 'operator:type', 'lit': 'lit', 'construction': 'construction', 'indoor': 'indoor', 'crop': 'crop', 'gated_community': 'gated_community', 'roof:height': 'roof:height', 'community': 'community', 'community:en': 'community:en', 'community:gender': 'community:gender', 'historic': 'historic', 'artist_name': 'artist_name', 'artwork_type': 'artwork_type', 'memorial': 'memorial', 'garden:style': 'garden:style', 'military': 'military', 'name:es': 'name:es', 'contact:phone': 'contact:phone', 'government': 'government', 'name:it': 'name:it', 'addr:country': 'addr:country', 'contact:website': 'contact:website', 'ref:UAI': 'ref:UAI', 'school:FR': 'school:FR', 'embankment': 'embankment', 'access:conditional': 'access:conditional', 'fence_type': 'fence_type', 'contact:housenumber': 'contact:housenumber', 'contact:street': 'contact:street', 'product': 'product', 'url': 'url', 'quantity': 'quantity', 'construction:end_date': 'construction:end_date', 'construction:railway': 'construction:railway', 'end_date': 'end_date', 'disused:leisure': 'disused:leisure', 'building:material': 'building:material', 'note:fr': 'note:fr', 'noname': 'noname', 'drink:beer': 'drink:beer', 'opening_hours:covid19': 'opening_hours:covid19', 'toilets': 'toilets', 'check_date': 'check_date', 'opening_date': 'opening_date', 'demolished:leisure': 'demolished:leisure', 'level:ref': 'level:ref', 'colour': 'colour', 'local_name': 'local_name', 'highway': 'highway', 'facebook': 'facebook', 'community:fr': 'community:fr', 'golf': 'golf', 'contact:facebook': 'contact:facebook', 'fee': 'fee', 'owner': 'owner', 'power_supply': 'power_supply', 'location': 'location', 'power': 'power', 'substation': 'substation', 'voltage': 'voltage', 'chess': 'chess', 'material': 'material', 'comment': 'comment', 'survey:date': 'survey:date', 'construction:leisure': 'construction:leisure', 'hoops': 'hoops', 'sorting_name': 'sorting_name', });
lyr_admin_level_10_Paris_multipolygons_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'name': 'TextEdit', 'postal_code': 'TextEdit', 'ref:TRIRIS': 'TextEdit', 'short_name': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'name:el': 'TextEdit', 'dog': 'TextEdit', 'alt_name': 'TextEdit', 'addr:postcode': 'TextEdit', 'name:ar': 'TextEdit', 'place': 'TextEdit', });
lyr_18et19_2.set('fieldImages', {'OBJECTID': 'Range', 'N_SQ_QU': 'Range', 'C_QU': 'Range', 'C_QUINSEE': 'Range', 'L_QU': 'TextEdit', 'C_AR': 'Range', 'N_SQ_AR': 'Range', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_MASK_3.set('fieldImages', {'osm_id': 'Range', 'class': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'extratags': 'TextEdit', });
lyr_Eau_4.set('fieldImages', {'OBJECTID': 'Range', 'N_SQ_PE': 'Range', 'L_EAU': 'TextEdit', 'C_DEP': 'Range', 'C_NIVEAU': 'Range', 'B_VISI': 'TextEdit', 'N_SQ_DE': 'Range', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ILOT_PHYSIQUE_5.set('fieldImages', {'OBJECTID': 'Range', 'C_TYPE_IL': 'TextEdit', 'N_SQ_IP': 'Range', 'C_DEP': 'Range', 'C_CAINSEE': 'Range', 'N_QU': 'TextEdit', 'L_IP': 'TextEdit', 'N_SQ_QU': 'TextEdit', 'N_SQ_AR': 'TextEdit', 'N_SQ_CO': 'Range', 'B_VISI': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ProjectSecteurOperationnelParis_6.set('fieldImages', {'OBJECTID': 'Range', 'l_nom_se_min': 'TextEdit', 'l_co': 'TextEdit', 'l_epci': 'TextEdit', 'c_ns': 'TextEdit', 'c_ns_pru': 'TextEdit', 'c_av': 'Range', 'an_p_r_achev': 'Range', 'm2_log': 'Range', 'm2_log_soc': 'Range', 'm2_bur': 'Range', 'm2_act': 'Range', 'm2_eq': 'Range', 'm2_com': 'Range', 'm2_hot': 'Range', 'm2_tot': 'Range', 'm2_evp': 'Range', 'nb_log': 'Range', 'nb_log_soc': 'Range', 'l_moa': 'TextEdit', 'l_moe': 'TextEdit', 'd_maj': 'DateTime', 'an_cr_si': 'Range', 'an_en_tr': 'Range', 'c_source': 'TextEdit', 'l_comment': 'TextEdit', 'nb_log_res': 'Range', 'nb_demol': 'Range', 'b_actif': 'TextEdit', 'b_plu': 'TextEdit', 'c_vocation_dom': 'TextEdit', 'nb_log_residuel': 'TextEdit', 'nb_log_calc': 'Range', 'm2_log_calc': 'Range', 'm2_act_calc': 'Range', 'm2_tot_calc': 'Range', 'c_gestion': 'TextEdit', 'c_moa': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EquipementEmpriseEspaceVert_7.set('fieldImages', {'OBJECTID': 'Range', 'n_sq_ee': 'Range', 'c_cainsee': 'Range', 'c_niv1': 'Range', 'c_niv2': 'Range', 'c_niv3': 'Range', 'b_avecpop': 'TextEdit', 'l_ee_maj': 'TextEdit', 'l_ee_min': 'TextEdit', 'b_visi': 'TextEdit', 'n_sq_deq': 'Range', 'b_local': 'TextEdit', 'b_territor': 'TextEdit', 'b_metropol': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Espacesverts_8.set('fieldImages', {'annee_ouverture': 'TextEdit', 'id_eqpt': 'TextEdit', 'surface_horticole': 'Range', 'ouvert_ferme': 'TextEdit', 'adresse_codepostal': 'TextEdit', 'ida3d_enb': 'TextEdit', 'adresse_typevoie': 'TextEdit', 'nb_entites': 'Range', 'id_division': 'Range', 'type_ev': 'TextEdit', 'nsq_espace_vert': 'Range', 'nom_ev': 'TextEdit', 'competence': 'TextEdit', 'adresse_libellevoie': 'TextEdit', 'perimeter': 'TextEdit', 'annee_renovation': 'TextEdit', 'categorie': 'TextEdit', 'ancien_nom_ev': 'TextEdit', 'poly_area': 'Range', 'adresse_numero': 'Range', 'id_atelier_horticole': 'Range', 'url_plan': 'TextEdit', 'surface_totale_reelle': 'Range', 'site_villes': 'TextEdit', 'presence_cloture': 'TextEdit', 'annee_changement_nom': 'TextEdit', 'adresse_complement': 'TextEdit', 'fraicheur_horaires_periode': 'TextEdit', 'fraicheur_horaires_lundi': 'TextEdit', 'fraicheur_canicule_ouverture': 'TextEdit', 'fraicheur_identifiant': 'TextEdit', 'fraicheur_proportion_vegetation_haute': 'TextEdit', 'fraicheur_horaires_jeudi': 'TextEdit', 'fraicheur_p_vegetation_h': 'TextEdit', 'fraicheur_nsq_espace_vert': 'Range', 'fraicheur_horaires_samedi': 'TextEdit', 'fraicheur_horaires_mardi': 'TextEdit', 'fraicheur_horaires_dimanche': 'TextEdit', 'fraicheur_nom': 'TextEdit', 'fraicheur_arrondissement': 'TextEdit', 'fraicheur_adresse': 'TextEdit', 'fraicheur_id_dicom': 'TextEdit', 'fraicheur_geo_point_2d': 'List', 'fraicheur_horaires_vendredi': 'TextEdit', 'fraicheur_ouverture_estivale_nocturne': 'TextEdit', 'fraicheur_ouvert_24h': 'TextEdit', 'fraicheur_statut_ouverture': 'TextEdit', 'fraicheur_horaires_mercredi': 'TextEdit', });
lyr_Ilotsdefraicheurespacesvertsfrais_9.set('fieldImages', {'horaires_periode': 'TextEdit', 'horaires_lundi': 'TextEdit', 'canicule_ouverture': 'TextEdit', 'identifiant': 'TextEdit', 'proportion_vegetation_haute': 'TextEdit', 'horaires_jeudi': 'TextEdit', 'p_vegetation_h': 'TextEdit', 'nsq_espace_vert': 'Range', 'horaires_samedi': 'TextEdit', 'horaires_mardi': 'TextEdit', 'type': 'TextEdit', 'horaires_dimanche': 'TextEdit', 'nom': 'TextEdit', 'arrondissement': 'TextEdit', 'adresse': 'TextEdit', 'id_dicom': 'TextEdit', 'geo_point_2d': 'List', 'horaires_vendredi': 'TextEdit', 'ouverture_estivale_nocturne': 'TextEdit', 'ouvert_24h': 'TextEdit', 'statut_ouverture': 'TextEdit', 'horaires_mercredi': 'TextEdit', });
lyr_VertOSM_10.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'landuse': '', 'type': '', 'name': '', 'height': '', 'wikidata': '', 'building': '', 'building:levels': '', 'barrier': '', 'access': '', 'leisure': '', 'residential': '', 'ref:FR:FANTOIR': '', 'level': '', 'industrial': '', 'bicycle': '', 'motor_vehicle': '', 'name:ja': '', 'opening_hours': '', 'leaf_cycle': '', 'operator': '', 'wikipedia': '', 'leaf_type': '', 'CLC:code': '', 'CLC:id': '', 'CLC:year': '', 'description': '', 'start_date': '', 'name:ca': '', 'name:cs': '', 'name:en': '', 'name:ru': '', 'place': '', 'wikimedia_commons': '', 'addr:city': '', 'addr:postcode': '', 'addr:street': '', 'dog': '', 'operator:wikidata': '', 'phone': '', 'website': '', 'addr:housenumber': '', 'alt_name': '', 'heritage': '', 'heritage:operator': '', 'mhs:inscription_date': '', 'name:da': '', 'name:et': '', 'name:tr': '', 'name:zh': '', 'ref:mhs': '', 'short_name': '', 'source:heritage': '', 'tourism': '', 'tourism:visitors': '', 'denomination': '', 'name:he': '', 'religion': '', 'website:image': '', 'disused:amenity': '', 'old_name': '', 'natural': '', 'water': '', 'width': '', 'architect': '', 'architect:wikidata': '', 'architect:wikipedia': '', 'capacity': '', 'covered': '', 'drinking_water': '', 'man_made': '', 'reservoir': '', 'surface': '', 'layer': '', 'amenity': '', 'internet_access': '', 'internet_access:fee': '', 'internet_access:operator': '', 'name:etymology:wikidata': '', 'name:etymology:wikipedia': '', 'source:internet_access': '', 'source:name': '', 'foot': '', 'sport': '', 'addr:housename': '', 'air_conditioning': '', 'building:level:0': '', 'building:level:1': '', 'building:level:2': '', 'building:level:3': '', 'shop': '', 'stroller': '', 'wall': '', 'wheelchair': '', 'roof:material': '', 'roof:shape': '', 'year_of_construction': '', 'boat': '', 'office': '', 'name:fr': '', 'name:ko': '', 'name:ar': '', 'name:de': '', 'name:el': '', 'disused:landuse': '', 'source:landuse': '', 'operator:type': '', 'lit': '', 'construction': '', 'indoor': '', 'crop': '', 'gated_community': '', 'roof:height': '', 'community': '', 'community:en': '', 'community:gender': '', 'historic': '', 'artist_name': '', 'artwork_type': '', 'memorial': '', 'garden:style': '', 'military': '', 'name:es': '', 'contact:phone': '', 'government': '', 'name:it': '', 'addr:country': '', 'contact:website': '', 'ref:UAI': '', 'school:FR': '', 'embankment': '', 'access:conditional': '', 'fence_type': '', 'contact:housenumber': '', 'contact:street': '', 'product': '', 'url': '', 'quantity': '', 'construction:end_date': '', 'construction:railway': '', 'end_date': '', 'disused:leisure': '', 'building:material': '', 'note:fr': '', 'noname': '', 'drink:beer': '', 'opening_hours:covid19': '', 'toilets': '', 'check_date': '', 'opening_date': '', 'demolished:leisure': '', 'level:ref': '', 'colour': '', 'local_name': '', 'highway': '', 'facebook': '', 'community:fr': '', 'golf': '', 'contact:facebook': '', 'fee': '', 'owner': '', 'power_supply': '', 'location': '', 'power': '', 'substation': '', 'voltage': '', 'chess': '', 'material': '', 'comment': '', 'survey:date': '', 'construction:leisure': '', 'hoops': '', 'sorting_name': '', });
lyr_admin_level_10_Paris_multipolygons_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'admin_level': 'no label', 'boundary': 'no label', 'name': 'no label', 'postal_code': 'no label', 'ref:TRIRIS': 'no label', 'short_name': 'no label', 'type': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', 'name:el': 'no label', 'dog': 'no label', 'alt_name': 'no label', 'addr:postcode': 'no label', 'name:ar': 'no label', 'place': 'no label', });
lyr_18et19_2.set('fieldLabels', {'OBJECTID': 'no label', 'N_SQ_QU': 'no label', 'C_QU': 'no label', 'C_QUINSEE': 'no label', 'L_QU': 'no label', 'C_AR': 'no label', 'N_SQ_AR': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_MASK_3.set('fieldLabels', {'osm_id': 'no label', 'class': 'no label', 'type': 'no label', 'name': 'no label', 'address': 'no label', 'extratags': 'no label', });
lyr_Eau_4.set('fieldLabels', {'OBJECTID': 'no label', 'N_SQ_PE': 'no label', 'L_EAU': 'no label', 'C_DEP': 'no label', 'C_NIVEAU': 'no label', 'B_VISI': 'no label', 'N_SQ_DE': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_ILOT_PHYSIQUE_5.set('fieldLabels', {'OBJECTID': 'no label', 'C_TYPE_IL': 'no label', 'N_SQ_IP': 'no label', 'C_DEP': 'no label', 'C_CAINSEE': 'no label', 'N_QU': 'no label', 'L_IP': 'no label', 'N_SQ_QU': 'no label', 'N_SQ_AR': 'no label', 'N_SQ_CO': 'no label', 'B_VISI': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_ProjectSecteurOperationnelParis_6.set('fieldLabels', {'OBJECTID': 'no label', 'l_nom_se_min': 'no label', 'l_co': 'no label', 'l_epci': 'no label', 'c_ns': 'no label', 'c_ns_pru': 'no label', 'c_av': 'no label', 'an_p_r_achev': 'no label', 'm2_log': 'no label', 'm2_log_soc': 'no label', 'm2_bur': 'no label', 'm2_act': 'no label', 'm2_eq': 'no label', 'm2_com': 'no label', 'm2_hot': 'no label', 'm2_tot': 'no label', 'm2_evp': 'no label', 'nb_log': 'no label', 'nb_log_soc': 'no label', 'l_moa': 'no label', 'l_moe': 'no label', 'd_maj': 'no label', 'an_cr_si': 'no label', 'an_en_tr': 'no label', 'c_source': 'no label', 'l_comment': 'no label', 'nb_log_res': 'no label', 'nb_demol': 'no label', 'b_actif': 'no label', 'b_plu': 'no label', 'c_vocation_dom': 'no label', 'nb_log_residuel': 'no label', 'nb_log_calc': 'no label', 'm2_log_calc': 'no label', 'm2_act_calc': 'no label', 'm2_tot_calc': 'no label', 'c_gestion': 'no label', 'c_moa': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_EquipementEmpriseEspaceVert_7.set('fieldLabels', {'OBJECTID': 'no label', 'n_sq_ee': 'no label', 'c_cainsee': 'no label', 'c_niv1': 'no label', 'c_niv2': 'no label', 'c_niv3': 'no label', 'b_avecpop': 'no label', 'l_ee_maj': 'no label', 'l_ee_min': 'no label', 'b_visi': 'no label', 'n_sq_deq': 'no label', 'b_local': 'no label', 'b_territor': 'no label', 'b_metropol': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Espacesverts_8.set('fieldLabels', {'annee_ouverture': 'no label', 'id_eqpt': 'no label', 'surface_horticole': 'no label', 'ouvert_ferme': 'no label', 'adresse_codepostal': 'no label', 'ida3d_enb': 'no label', 'adresse_typevoie': 'no label', 'nb_entites': 'no label', 'id_division': 'no label', 'type_ev': 'no label', 'nsq_espace_vert': 'no label', 'nom_ev': 'no label', 'competence': 'no label', 'adresse_libellevoie': 'no label', 'perimeter': 'no label', 'annee_renovation': 'no label', 'categorie': 'no label', 'ancien_nom_ev': 'no label', 'poly_area': 'no label', 'adresse_numero': 'no label', 'id_atelier_horticole': 'no label', 'url_plan': 'no label', 'surface_totale_reelle': 'no label', 'site_villes': 'no label', 'presence_cloture': 'no label', 'annee_changement_nom': 'no label', 'adresse_complement': 'no label', 'fraicheur_horaires_periode': 'no label', 'fraicheur_horaires_lundi': 'no label', 'fraicheur_canicule_ouverture': 'no label', 'fraicheur_identifiant': 'no label', 'fraicheur_proportion_vegetation_haute': 'no label', 'fraicheur_horaires_jeudi': 'no label', 'fraicheur_p_vegetation_h': 'no label', 'fraicheur_nsq_espace_vert': 'no label', 'fraicheur_horaires_samedi': 'no label', 'fraicheur_horaires_mardi': 'no label', 'fraicheur_horaires_dimanche': 'no label', 'fraicheur_nom': 'no label', 'fraicheur_arrondissement': 'no label', 'fraicheur_adresse': 'no label', 'fraicheur_id_dicom': 'no label', 'fraicheur_geo_point_2d': 'no label', 'fraicheur_horaires_vendredi': 'no label', 'fraicheur_ouverture_estivale_nocturne': 'no label', 'fraicheur_ouvert_24h': 'no label', 'fraicheur_statut_ouverture': 'no label', 'fraicheur_horaires_mercredi': 'no label', });
lyr_Ilotsdefraicheurespacesvertsfrais_9.set('fieldLabels', {'horaires_periode': 'no label', 'horaires_lundi': 'no label', 'canicule_ouverture': 'no label', 'identifiant': 'no label', 'proportion_vegetation_haute': 'no label', 'horaires_jeudi': 'no label', 'p_vegetation_h': 'no label', 'nsq_espace_vert': 'no label', 'horaires_samedi': 'no label', 'horaires_mardi': 'no label', 'type': 'no label', 'horaires_dimanche': 'no label', 'nom': 'no label', 'arrondissement': 'no label', 'adresse': 'no label', 'id_dicom': 'no label', 'geo_point_2d': 'no label', 'horaires_vendredi': 'no label', 'ouverture_estivale_nocturne': 'no label', 'ouvert_24h': 'no label', 'statut_ouverture': 'no label', 'horaires_mercredi': 'no label', });
lyr_VertOSM_10.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'type': 'no label', 'name': 'no label', 'height': 'no label', 'wikidata': 'no label', 'building': 'no label', 'building:levels': 'no label', 'barrier': 'no label', 'access': 'no label', 'leisure': 'no label', 'residential': 'no label', 'ref:FR:FANTOIR': 'no label', 'level': 'no label', 'industrial': 'no label', 'bicycle': 'no label', 'motor_vehicle': 'no label', 'name:ja': 'no label', 'opening_hours': 'no label', 'leaf_cycle': 'no label', 'operator': 'no label', 'wikipedia': 'no label', 'leaf_type': 'no label', 'CLC:code': 'no label', 'CLC:id': 'no label', 'CLC:year': 'no label', 'description': 'no label', 'start_date': 'no label', 'name:ca': 'no label', 'name:cs': 'no label', 'name:en': 'no label', 'name:ru': 'no label', 'place': 'no label', 'wikimedia_commons': 'no label', 'addr:city': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'dog': 'no label', 'operator:wikidata': 'no label', 'phone': 'no label', 'website': 'no label', 'addr:housenumber': 'no label', 'alt_name': 'no label', 'heritage': 'no label', 'heritage:operator': 'no label', 'mhs:inscription_date': 'no label', 'name:da': 'no label', 'name:et': 'no label', 'name:tr': 'no label', 'name:zh': 'no label', 'ref:mhs': 'no label', 'short_name': 'no label', 'source:heritage': 'no label', 'tourism': 'no label', 'tourism:visitors': 'no label', 'denomination': 'no label', 'name:he': 'no label', 'religion': 'no label', 'website:image': 'no label', 'disused:amenity': 'no label', 'old_name': 'no label', 'natural': 'no label', 'water': 'no label', 'width': 'no label', 'architect': 'no label', 'architect:wikidata': 'no label', 'architect:wikipedia': 'no label', 'capacity': 'no label', 'covered': 'no label', 'drinking_water': 'no label', 'man_made': 'no label', 'reservoir': 'no label', 'surface': 'no label', 'layer': 'no label', 'amenity': 'no label', 'internet_access': 'no label', 'internet_access:fee': 'no label', 'internet_access:operator': 'no label', 'name:etymology:wikidata': 'no label', 'name:etymology:wikipedia': 'no label', 'source:internet_access': 'no label', 'source:name': 'no label', 'foot': 'no label', 'sport': 'no label', 'addr:housename': 'no label', 'air_conditioning': 'no label', 'building:level:0': 'no label', 'building:level:1': 'no label', 'building:level:2': 'no label', 'building:level:3': 'no label', 'shop': 'no label', 'stroller': 'no label', 'wall': 'no label', 'wheelchair': 'no label', 'roof:material': 'no label', 'roof:shape': 'no label', 'year_of_construction': 'no label', 'boat': 'no label', 'office': 'no label', 'name:fr': 'no label', 'name:ko': 'no label', 'name:ar': 'no label', 'name:de': 'no label', 'name:el': 'no label', 'disused:landuse': 'no label', 'source:landuse': 'no label', 'operator:type': 'no label', 'lit': 'no label', 'construction': 'no label', 'indoor': 'no label', 'crop': 'no label', 'gated_community': 'no label', 'roof:height': 'no label', 'community': 'no label', 'community:en': 'no label', 'community:gender': 'no label', 'historic': 'no label', 'artist_name': 'no label', 'artwork_type': 'no label', 'memorial': 'no label', 'garden:style': 'no label', 'military': 'no label', 'name:es': 'no label', 'contact:phone': 'no label', 'government': 'no label', 'name:it': 'no label', 'addr:country': 'no label', 'contact:website': 'no label', 'ref:UAI': 'no label', 'school:FR': 'no label', 'embankment': 'no label', 'access:conditional': 'no label', 'fence_type': 'no label', 'contact:housenumber': 'no label', 'contact:street': 'no label', 'product': 'no label', 'url': 'no label', 'quantity': 'no label', 'construction:end_date': 'no label', 'construction:railway': 'no label', 'end_date': 'no label', 'disused:leisure': 'no label', 'building:material': 'no label', 'note:fr': 'no label', 'noname': 'no label', 'drink:beer': 'no label', 'opening_hours:covid19': 'no label', 'toilets': 'no label', 'check_date': 'no label', 'opening_date': 'no label', 'demolished:leisure': 'no label', 'level:ref': 'no label', 'colour': 'no label', 'local_name': 'no label', 'highway': 'no label', 'facebook': 'no label', 'community:fr': 'no label', 'golf': 'no label', 'contact:facebook': 'no label', 'fee': 'no label', 'owner': 'no label', 'power_supply': 'no label', 'location': 'no label', 'power': 'no label', 'substation': 'no label', 'voltage': 'no label', 'chess': 'no label', 'material': 'no label', 'comment': 'no label', 'survey:date': 'no label', 'construction:leisure': 'no label', 'hoops': 'no label', 'sorting_name': 'no label', });
lyr_VertOSM_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
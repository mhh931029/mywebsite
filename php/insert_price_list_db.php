<?php
header("content-type:text/html;charset=utf-8");
//接收传过来的数据
$zhongzhi_hanguo_chuntai_gexinghuayitiguan = $_POST["zhongzhi_hanguo_chuntai_gexinghuayitiguan"];
$zhongzhi_hanguo_chuntai_gexinghuayitiguan_beizhu = $_POST["zhongzhi_hanguo_chuntai_gexinghuayitiguan_beizhu"];
$zhongzhi_oumei_chuntai_gexinghuayitiguan = $_POST["zhongzhi_oumei_chuntai_gexinghuayitiguan"];
$zhongzhi_oumei_chuntai_gexinghuayitiguan_beizhu = $_POST["zhongzhi_oumei_chuntai_gexinghuayitiguan_beizhu"];
$zhongzhi_guochanyanghuagao_gexinghuayitiguan = $_POST["zhongzhi_guochanyanghuagao_gexinghuayitiguan"];
$zhongzhi_guochanyanghuagao_gexinghuayitiguan_beizhu = $_POST["zhongzhi_guochanyanghuagao_gexinghuayitiguan_beizhu"];
$zhongzhi_weilande_gexinghuayitiguan = $_POST["zhongzhi_weilande_gexinghuayitiguan"];
$zhongzhi_weilande_gexinghuayitiguan_beizhu = $_POST["zhongzhi_weilande_gexinghuayitiguan_beizhu"];
$zhongzhi_bego_guge_gexinghuayitiguan = $_POST["zhongzhi_bego_guge_gexinghuayitiguan"];
$zhongzhi_bego_guge_gexinghuayitiguan_beizhu = $_POST["zhongzhi_bego_guge_gexinghuayitiguan_beizhu"];
$zhongzhi_zhongzhiganka = $_POST["zhongzhi_zhongzhiganka"];
$zhongzhi_zhongzhiganka_beizhu = $_POST["zhongzhi_zhongzhiganka_beizhu"];
$zhongzhi_hanguo_chuntai_gexinghuajitai = $_POST["zhongzhi_hanguo_chuntai_gexinghuajitai"];
$zhongzhi_hanguo_chuntai_gexinghuajitai_beizhu = $_POST["zhongzhi_hanguo_chuntai_gexinghuajitai_beizhu"];
$zhongzhi_hanguo_yanghuagao_gexinghuajitai = $_POST["zhongzhi_hanguo_yanghuagao_gexinghuajitai"];
$zhongzhi_hanguo_yanghuagao_gexinghuajitai_beizhu = $_POST["zhongzhi_hanguo_yanghuagao_gexinghuajitai_beizhu"];
$zhongzhi_oumei_chuntai_gexinghuajitai = $_POST["zhongzhi_oumei_chuntai_gexinghuajitai"];
$zhongzhi_oumei_chuntai_gexinghuajitai_beizhu = $_POST["zhongzhi_oumei_chuntai_gexinghuajitai_beizhu"];
$zhongzhi_oumei_yanghuagao_gexinghuajitai = $_POST["zhongzhi_oumei_yanghuagao_gexinghuajitai"];
$zhongzhi_oumei_yanghuagao_gexinghuajitai_beizhu = $_POST["zhongzhi_oumei_yanghuagao_gexinghuajitai_beizhu"];
$zhongzhi_yanghuagao_quangao = $_POST["zhongzhi_yanghuagao_quangao"];
$zhongzhi_yanghuagao_quangao_beizhu = $_POST["zhongzhi_yanghuagao_quangao_beizhu"];
$zhongzhi_weilande_quangao = $_POST["zhongzhi_weilande_quangao"];
$zhongzhi_weilande_quangao_beizhu = $_POST["zhongzhi_weilande_quangao_beizhu"];
$zhongzhi_bianselong_quangao = $_POST["zhongzhi_bianselong_quangao"];
$zhongzhi_bianselong_quangao_beizhu = $_POST["zhongzhi_bianselong_quangao_beizhu"];
$zhongzhi_yanghuagao_quanci = $_POST["zhongzhi_yanghuagao_quanci"];
$zhongzhi_yanghuagao_quanci_beizhu = $_POST["zhongzhi_yanghuagao_quanci_beizhu"];
$zhongzhi_weilande_quanci = $_POST["zhongzhi_weilande_quanci"];
$zhongzhi_weilande_quanci_beizhu = $_POST["zhongzhi_weilande_quanci_beizhu"];
$zhongzhi_bianselong_quanci = $_POST["zhongzhi_bianselong_quanci"];
$zhongzhi_bianselong_quanci_beizhu = $_POST["zhongzhi_bianselong_quanci_beizhu"];
$zhongzhi_bego_guge_guan = $_POST["zhongzhi_bego_guge_guan"];
$zhongzhi_bego_guge_guan_beizhu = $_POST["zhongzhi_bego_guge_guan_beizhu"];
$zhongzhi_bego_guge_kaoci = $_POST["zhongzhi_bego_guge_kaoci"];
$zhongzhi_bego_guge_kaoci_beizhu = $_POST["zhongzhi_bego_guge_kaoci_beizhu"];
$zhongzhi_sandi_guge_guan = $_POST["zhongzhi_sandi_guge_guan"];
$zhongzhi_sandi_guge_guan_beizhu = $_POST["zhongzhi_sandi_guge_guan_beizhu"];
$zhongzhi_sandi_guge_kaoci = $_POST["zhongzhi_sandi_guge_kaoci"];
$zhongzhi_sandi_guge_kaoci_beizhu = $_POST["zhongzhi_sandi_guge_kaoci_beizhu"];
$zhongzhi_sandi_chuntai_guan = $_POST["zhongzhi_sandi_chuntai_guan"];
$zhongzhi_sandi_chuntai_guan_beizhu = $_POST["zhongzhi_sandi_chuntai_guan_beizhu"];
$zhongzhi_sandi_chuntai_kaosu = $_POST["zhongzhi_sandi_chuntai_kaosu"];
$zhongzhi_sandi_chuntai_kaosu_beizhu = $_POST["zhongzhi_sandi_chuntai_kaosu_beizhu"];
$zhongzhi_sandi_daoban = $_POST["zhongzhi_sandi_daoban"];
$zhongzhi_sandi_daoban_beizhu = $_POST["zhongzhi_sandi_daoban_beizhu"];
$zhongzhi_sandi_daoban_meiduoyikong = $_POST["zhongzhi_sandi_daoban_meiduoyikong"];
$zhongzhi_sandi_daoban_meiduoyikong_beizhu = $_POST["zhongzhi_sandi_daoban_meiduoyikong_beizhu"];
$zhongzhi_aregen_jin_kaosu_ya_59_9_percent = $_POST["zhongzhi_aregen_jin_kaosu_ya_59_9_percent"];
$zhongzhi_aregen_jin_kaosu_ya_59_9_percent_beizhu = $_POST["zhongzhi_aregen_jin_kaosu_ya_59_9_percent_beizhu"];
$zhongzhi_aregen_jin_kaosu_ya_74_percent = $_POST["zhongzhi_aregen_jin_kaosu_ya_74_percent"];
$zhongzhi_aregen_jin_kaosu_ya_74_percent_beizhu = $_POST["zhongzhi_aregen_jin_kaosu_ya_74_percent_beizhu"];
$zhongzhi_aregen_jin_kaosu_ya_89_5_percent = $_POST["zhongzhi_aregen_jin_kaosu_ya_89_5_percent"];
$zhongzhi_aregen_jin_kaosu_ya_89_5_percent_beizhu = $_POST["zhongzhi_aregen_jin_kaosu_ya_89_5_percent_beizhu"];
$zhongzhi_aregen_jin_kaoci_ya_74_percent = $_POST["zhongzhi_aregen_jin_kaoci_ya_74_percent"];
$zhongzhi_aregen_jin_kaoci_ya_74_percent_beizhu = $_POST["zhongzhi_aregen_jin_kaoci_ya_74_percent_beizhu"];
$zhongzhi_aregen_jin_kaoci_ya_89_5_percent = $_POST["zhongzhi_aregen_jin_kaoci_ya_89_5_percent"];
$zhongzhi_aregen_jin_kaoci_ya_89_5_percent_beizhu = $_POST["zhongzhi_aregen_jin_kaoci_ya_89_5_percent_beizhu"];
$guding_guochanyanghuagao_quangao = $_POST["guding_guochanyanghuagao_quangao"];
$guding_guochanyanghuagao_quangao_beizhu = $_POST["guding_guochanyanghuagao_quangao_beizhu"];
$guding_guochanyanghuagao_quanci = $_POST["guding_guochanyanghuagao_quanci"];
$guding_guochanyanghuagao_quanci_beizhu = $_POST["guding_guochanyanghuagao_quanci_beizhu"];
$guding_guochanyanghuagao_zhuanghe = $_POST["guding_guochanyanghuagao_zhuanghe"];
$guding_guochanyanghuagao_zhuanghe_beizhu = $_POST["guding_guochanyanghuagao_zhuanghe_beizhu"];
$guding_weilande_quangao = $_POST["guding_weilande_quangao"];
$guding_weilande_quangao_beizhu = $_POST["guding_weilande_quangao_beizhu"];
$guding_weilande_quanci = $_POST["guding_weilande_quanci"];
$guding_weilande_quanci_beizhu = $_POST["guding_weilande_quanci_beizhu"];
$guding_lava_quangao = $_POST["guding_lava_quangao"];
$guding_lava_quangao_beizhu = $_POST["guding_lava_quangao_beizhu"];
$guding_lava_quanci = $_POST["guding_lava_quanci"];
$guding_lava_quanci_beizhu = $_POST["guding_lava_quanci_beizhu"];
$guding_bianselong_quangao = $_POST["guding_bianselong_quangao"];
$guding_bianselong_quangao_beizhu = $_POST["guding_bianselong_quangao_beizhu"];
$guding_bianselong_quanci = $_POST["guding_bianselong_quanci"];
$guding_bianselong_quanci_beizhu = $_POST["guding_bianselong_quanci_beizhu"];
$guding_sandi_guge_zhuanghe = $_POST["guding_sandi_guge_zhuanghe"];
$guding_sandi_guge_zhuanghe_beizhu = $_POST["guding_sandi_guge_zhuanghe_beizhu"];
$guding_sandi_guge_qianti = $_POST["guding_sandi_guge_qianti"];
$guding_sandi_guge_qianti_beizhu = $_POST["guding_sandi_guge_qianti_beizhu"];
$guding_sandi_guge_guan = $_POST["guding_sandi_guge_guan"];
$guding_sandi_guge_guan_beizhu = $_POST["guding_sandi_guge_guan_beizhu"];
$guding_sandi_guge_kaoci = $_POST["guding_sandi_guge_kaoci"];
$guding_sandi_guge_kaoci_beizhu = $_POST["guding_sandi_guge_kaoci_beizhu"];
$guding_sandi_chuntai_zhuanghe = $_POST["guding_sandi_chuntai_zhuanghe"];
$guding_sandi_chuntai_zhuanghe_beizhu = $_POST["guding_sandi_chuntai_zhuanghe_beizhu"];
$guding_sandi_chuntai_qianti = $_POST["guding_sandi_chuntai_qianti"];
$guding_sandi_chuntai_qianti_beizhu = $_POST["guding_sandi_chuntai_qianti_beizhu"];
$guding_sandi_chuntai_guan = $_POST["guding_sandi_chuntai_guan"];
$guding_sandi_chuntai_guan_beizhu = $_POST["guding_sandi_chuntai_guan_beizhu"];
$guding_sandi_chuntai_juheci = $_POST["guding_sandi_chuntai_juheci"];
$guding_sandi_chuntai_juheci_beizhu = $_POST["guding_sandi_chuntai_juheci_beizhu"];
$guding_bego_guge_zhuanghe = $_POST["guding_bego_guge_zhuanghe"];
$guding_bego_guge_zhuanghe_beizhu = $_POST["guding_bego_guge_zhuanghe_beizhu"];
$guding_bego_guge_qianti = $_POST["guding_bego_guge_qianti"];
$guding_bego_guge_qianti_beizhu = $_POST["guding_bego_guge_qianti_beizhu"];
$guding_bego_guge_guan = $_POST["guding_bego_guge_guan"];
$guding_bego_guge_guan_beizhu = $_POST["guding_bego_guge_guan_beizhu"];
$guding_bego_guge_kaoci = $_POST["guding_bego_guge_kaoci"];
$guding_bego_guge_kaoci_beizhu = $_POST["guding_bego_guge_kaoci_beizhu"];
$guding_bego_guge_juheci = $_POST["guding_bego_guge_juheci"];
$guding_bego_guge_juheci_beizhu = $_POST["guding_bego_guge_juheci_beizhu"];
$guding_juheci_qianti = $_POST["guding_juheci_qianti"];
$guding_juheci_qianti_beizhu = $_POST["guding_juheci_qianti_beizhu"];
$guding_aregen_jin_kaoci_ya_59_9_percent = $_POST["guding_aregen_jin_kaoci_ya_59_9_percent"];
$guding_aregen_jin_kaoci_ya_59_9_percent_beizhu = $_POST["guding_aregen_jin_kaoci_ya_59_9_percent_beizhu"];
$guding_aregen_jin_kaoci_ya_74_percent = $_POST["guding_aregen_jin_kaoci_ya_74_percent"];
$guding_aregen_jin_kaoci_ya_74_percent_beizhu = $_POST["guding_aregen_jin_kaoci_ya_74_percent_beizhu"];
$guding_aregen_jin_kaoci_ya_89_5_percent = $_POST["guding_aregen_jin_kaoci_ya_89_5_percent"];
$guding_aregen_jin_kaoci_ya_89_5_percent_beizhu = $_POST["guding_aregen_jin_kaoci_ya_89_5_percent_beizhu"];
$guding_aregen_jin_kaosu_ya_59_9_percent = $_POST["guding_aregen_jin_kaosu_ya_59_9_percent"];
$guding_aregen_jin_kaosu_ya_59_9_percent_beizhu = $_POST["guding_aregen_jin_kaosu_ya_59_9_percent_beizhu"];
$guding_aregen_jin_kaosu_ya_74_percent = $_POST["guding_aregen_jin_kaosu_ya_74_percent"];
$guding_aregen_jin_kaosu_ya_74_percent_beizhu = $_POST["guding_aregen_jin_kaosu_ya_74_percent_beizhu"];
$guding_aregen_jin_kaosu_ya_89_5_percent = $_POST["guding_aregen_jin_kaosu_ya_89_5_percent"];
$guding_aregen_jin_kaosu_ya_89_5_percent_beizhu = $_POST["guding_aregen_jin_kaosu_ya_89_5_percent_beizhu"];
$guding_aregen_jin_guan_59_9_percent = $_POST["guding_aregen_jin_guan_59_9_percent"];
$guding_aregen_jin_guan_59_9_percent_beizhu = $_POST["guding_aregen_jin_guan_59_9_percent_beizhu"];
$guding_aregen_jin_guan_74_percent = $_POST["guding_aregen_jin_guan_74_percent"];
$guding_aregen_jin_guan_74_percent_beizhu = $_POST["guding_aregen_jin_guan_74_percent_beizhu"];
$guding_aregen_jin_guan_89_5_percent = $_POST["guding_aregen_jin_guan_89_5_percent"];
$guding_aregen_jin_guan_89_5_percent_beizhu = $_POST["guding_aregen_jin_guan_89_5_percent_beizhu"];
$guding_aregen_jin_qianti_59_9_percent = $_POST["guding_aregen_jin_qianti_59_9_percent"];
$guding_aregen_jin_qianti_59_9_percent_beizhu = $_POST["guding_aregen_jin_qianti_59_9_percent_beizhu"];
$guding_aregen_jin_qianti_74_percent = $_POST["guding_aregen_jin_qianti_74_percent"];
$guding_aregen_jin_qianti_74_percent_beizhu = $_POST["guding_aregen_jin_qianti_74_percent_beizhu"];
$guding_aregen_jin_qianti_89_5_percent = $_POST["guding_aregen_jin_qianti_89_5_percent"];
$guding_aregen_jin_qianti_89_5_percent_beizhu = $_POST["guding_aregen_jin_qianti_89_5_percent_beizhu"];
$guding_aregen_jin_zhuanghe_59_9_percent = $_POST["guding_aregen_jin_zhuanghe_59_9_percent"];
$guding_aregen_jin_zhuanghe_59_9_percent_beizhu = $_POST["guding_aregen_jin_zhuanghe_59_9_percent_beizhu"];
$guding_aregen_jin_zhuanghe_74_percent = $_POST["guding_aregen_jin_zhuanghe_74_percent"];
$guding_aregen_jin_zhuanghe_74_percent_beizhu = $_POST["guding_aregen_jin_zhuanghe_74_percent_beizhu"];
$guding_aregen_jin_zhuanghe_89_5_percent = $_POST["guding_aregen_jin_zhuanghe_89_5_percent"];
$guding_aregen_jin_zhuanghe_89_5_percent_beizhu = $_POST["guding_aregen_jin_zhuanghe_89_5_percent_beizhu"];
$guding_linshiguan_cad = $_POST["guding_linshiguan_cad"];
$guding_linshiguan_cad_beizhu = $_POST["guding_linshiguan_cad_beizhu"];
$guding_linshiguan_cam = $_POST["guding_linshiguan_cam"];
$guding_linshiguan_cam_beizhu = $_POST["guding_linshiguan_cam_beizhu"];
$guding_laxingsheji = $_POST["guding_laxingsheji"];
$guding_laxingsheji_beizhu = $_POST["guding_laxingsheji_beizhu"];
$guding_jiantaici = $_POST["guding_jiantaici"];
$guding_jiantaici_beizhu = $_POST["guding_jiantaici_beizhu"];
$guding_yayinci = $_POST["guding_yayinci"];
$guding_yayinci_beizhu = $_POST["guding_yayinci_beizhu"];
$huodong_sandi_zhijia_da_guge = $_POST["huodong_sandi_zhijia_da_guge"];
$huodong_sandi_zhijia_da_guge_beizhu = $_POST["huodong_sandi_zhijia_da_guge_beizhu"];
$huodong_sandi_zhijia_xiao_guge = $_POST["huodong_sandi_zhijia_xiao_guge"];
$huodong_sandi_zhijia_xiao_guge_beizhu = $_POST["huodong_sandi_zhijia_xiao_guge_beizhu"];
$huodong_sandi_zhijia_da_chuntai = $_POST["huodong_sandi_zhijia_da_chuntai"];
$huodong_sandi_zhijia_da_chuntai_beizhu = $_POST["huodong_sandi_zhijia_da_chuntai_beizhu"];
$huodong_sandi_zhijia_xiao_chuntai = $_POST["huodong_sandi_zhijia_xiao_chuntai"];
$huodong_sandi_zhijia_xiao_chuntai_beizhu = $_POST["huodong_sandi_zhijia_xiao_chuntai_beizhu"];
$huodong_zhijia_da_bego = $_POST["huodong_zhijia_da_bego"];
$huodong_zhijia_da_bego_beizhu = $_POST["huodong_zhijia_da_bego_beizhu"];
$huodong_zhijia_xiao_bego = $_POST["huodong_zhijia_xiao_bego"];
$huodong_zhijia_xiao_bego_beizhu = $_POST["huodong_zhijia_xiao_bego_beizhu"];
$huodong_zhijia_da_nuobiling = $_POST["huodong_zhijia_da_nuobiling"];
$huodong_zhijia_da_nuobiling_beizhu = $_POST["huodong_zhijia_da_nuobiling_beizhu"];
$huodong_zhijia_xiao_nuobiling = $_POST["huodong_zhijia_xiao_nuobiling"];
$huodong_zhijia_xiao_nuobiling_beizhu = $_POST["huodong_zhijia_xiao_nuobiling_beizhu"];
$huodong_zhijia_da_weitaling_2000 = $_POST["huodong_zhijia_da_weitaling_2000"];
$huodong_zhijia_da_weitaling_2000_beizhu = $_POST["huodong_zhijia_da_weitaling_2000_beizhu"];
$huodong_zhijia_xiao_weitaling_2000 = $_POST["huodong_zhijia_xiao_weitaling_2000"];
$huodong_zhijia_xiao_weitaling_2000_beizhu = $_POST["huodong_zhijia_xiao_weitaling_2000_beizhu"];
$huodong_paiya_kaifeng_zhusuzhuya = $_POST["huodong_paiya_kaifeng_zhusuzhuya"];
$huodong_paiya_kaifeng_zhusuzhuya_beizhu = $_POST["huodong_paiya_kaifeng_zhusuzhuya_beizhu"];
$huodong_paiya_kaifeng_zhusuzhuya_labor = $_POST["huodong_paiya_kaifeng_zhusuzhuya_labor"];
$huodong_paiya_kaifeng_zhusuzhuya_labor_beizhu = $_POST["huodong_paiya_kaifeng_zhusuzhuya_labor_beizhu"];
$huodong_paiya_kaijing_zhusuzhuya = $_POST["huodong_paiya_kaijing_zhusuzhuya"];
$huodong_paiya_kaijing_zhusuzhuya_beizhu = $_POST["huodong_paiya_kaijing_zhusuzhuya_beizhu"];
$huodong_paiya_kaijing_zhusuzhuya_labor = $_POST["huodong_paiya_kaijing_zhusuzhuya_labor"];
$huodong_paiya_kaijing_zhusuzhuya_labor_beizhu = $_POST["huodong_paiya_kaijing_zhusuzhuya_labor_beizhu"];
$huodong_paiya_shofu_zhusuzhuya = $_POST["huodong_paiya_shofu_zhusuzhuya"];
$huodong_paiya_shofu_zhusuzhuya_beizhu = $_POST["huodong_paiya_shofu_zhusuzhuya_beizhu"];
$huodong_paiya_shofu_zhusuzhuya_labor = $_POST["huodong_paiya_shofu_zhusuzhuya_labor"];
$huodong_paiya_shofu_zhusuzhuya_labor_beizhu = $_POST["huodong_paiya_shofu_zhusuzhuya_labor_beizhu"];
$huodong_paiya_changzhengzhong_putong_zhusuzhuya = $_POST["huodong_paiya_changzhengzhong_putong_zhusuzhuya"];
$huodong_paiya_changzhengzhong_putong_zhusuzhuya_beizhu = $_POST["huodong_paiya_changzhengzhong_putong_zhusuzhuya_beizhu"];
$huodong_paiya_changzhengzhong_putong_zhusuzhuya_labor = $_POST["huodong_paiya_changzhengzhong_putong_zhusuzhuya_labor"];
$huodong_paiya_changzhengzhong_putong_zhusuzhuya_labor_beizhu = $_POST["huodong_paiya_changzhengzhong_putong_zhusuzhuya_labor_beizhu"];
$huodong_paiya_changzhengzhong_chaoying_zhusuzhuya = $_POST["huodong_paiya_changzhengzhong_chaoying_zhusuzhuya"];
$huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_beizhu = $_POST["huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_beizhu"];
$huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_labor = $_POST["huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_labor"];
$huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_labor_beizhu = $_POST["huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_labor_beizhu"];
$huodong_jiaotuo_suliaotuoya = $_POST["huodong_jiaotuo_suliaotuoya"];
$huodong_jiaotuo_suliaotuoya_beizhu = $_POST["huodong_jiaotuo_suliaotuoya_beizhu"];
$huodong_jiaotuo_gexinghuatuopan = $_POST["huodong_jiaotuo_gexinghuatuopan"];
$huodong_jiaotuo_gexinghuatuopan_beizhu = $_POST["huodong_jiaotuo_gexinghuatuopan_beizhu"];
$huodong_jiaotuo_jinshuhedian = $_POST["huodong_jiaotuo_jinshuhedian"];
$huodong_jiaotuo_jinshuhedian_beizhu = $_POST["huodong_jiaotuo_jinshuhedian_beizhu"];
$huodong_jiaotuo_jinshuhemian = $_POST["huodong_jiaotuo_jinshuhemian"];
$huodong_jiaotuo_jinshuhemian_beizhu = $_POST["huodong_jiaotuo_jinshuhemian_beizhu"];
$huodong_jiaotuo_zhuzaohezhituo = $_POST["huodong_jiaotuo_zhuzaohezhituo"];
$huodong_jiaotuo_zhuzaohezhituo_beizhu = $_POST["huodong_jiaotuo_zhuzaohezhituo_beizhu"];
$huodong_jiaotuo_chengpinwang = $_POST["huodong_jiaotuo_chengpinwang"];
$huodong_jiaotuo_chengpinwang_beizhu = $_POST["huodong_jiaotuo_chengpinwang_beizhu"];
$huodong_yinxingyichi_da = $_POST["huodong_yinxingyichi_da"];
$huodong_yinxingyichi_da_beizhu = $_POST["huodong_yinxingyichi_da_beizhu"];
$huodong_yinxingyichi_xiao = $_POST["huodong_yinxingyichi_xiao"];
$huodong_yinxingyichi_xiao_beizhu = $_POST["huodong_yinxingyichi_xiao_beizhu"];
$huodong_zhusuzhuya_bankou = $_POST["huodong_zhusuzhuya_bankou"];
$huodong_zhusuzhuya_bankou_beizhu = $_POST["huodong_zhusuzhuya_bankou_beizhu"];
$huodong_zhusuzhuya_quankou = $_POST["huodong_zhusuzhuya_quankou"];
$huodong_zhusuzhuya_quankou_beizhu = $_POST["huodong_zhusuzhuya_quankou_beizhu"];
$meixue_meibaichaobaotiemian = $_POST["meixue_meibaichaobaotiemian"];
$meixue_meibaichaobaotiemian_beizhu = $_POST["meixue_meibaichaobaotiemian_beizhu"];
$meixue_maierfangshengquangao = $_POST["meixue_maierfangshengquangao"];
$meixue_maierfangshengquangao_beizhu = $_POST["meixue_maierfangshengquangao_beizhu"];
$meixue_maierfangshengquanci = $_POST["meixue_maierfangshengquanci"];
$meixue_maierfangshengquanci_beizhu = $_POST["meixue_maierfangshengquanci_beizhu"];
$meixue_zhuci_quanguan = $_POST["meixue_zhuci_quanguan"];
$meixue_zhuci_quanguan_beizhu = $_POST["meixue_zhuci_quanguan_beizhu"];
$meixue_zhuci_qianti = $_POST["meixue_zhuci_qianti"];
$meixue_zhuci_qianti_beizhu = $_POST["meixue_zhuci_qianti_beizhu"];
$meixue_bolitaoci_tiemian = $_POST["meixue_bolitaoci_tiemian"];
$meixue_bolitaoci_tiemian_beizhu = $_POST["meixue_bolitaoci_tiemian_beizhu"];
$meixue_bolitaoci_qianti = $_POST["meixue_bolitaoci_qianti"];
$meixue_bolitaoci_qianti_beizhu = $_POST["meixue_bolitaoci_qianti_beizhu"];
$meixue_bolitaoci_quanguan = $_POST["meixue_bolitaoci_quanguan"];
$meixue_bolitaoci_quanguan_beizhu = $_POST["meixue_bolitaoci_quanguan_beizhu"];
$meixue_meixuezhenduanla = $_POST["meixue_meixuezhenduanla"];
$meixue_meixuezhenduanla_beizhu = $_POST["meixue_meixuezhenduanla_beizhu"];
$zhengji_yinxingbaochiqi_bankou = $_POST["zhengji_yinxingbaochiqi_bankou"];
$zhengji_yinxingbaochiqi_bankou_beizhu = $_POST["zhengji_yinxingbaochiqi_bankou_beizhu"];
$zhengji_wanzhibaochiqi_bankou = $_POST["zhengji_wanzhibaochiqi_bankou"];
$zhengji_wanzhibaochiqi_bankou_beizhu = $_POST["zhengji_wanzhibaochiqi_bankou_beizhu"];
$zhengji_jianxibaochiqi = $_POST["zhengji_jianxibaochiqi"];
$zhengji_jianxibaochiqi_beizhu = $_POST["zhengji_jianxibaochiqi_beizhu"];
$zhengji_yemoyatao = $_POST["zhengji_yemoyatao"];
$zhengji_yemoyatao_beizhu = $_POST["zhengji_yemoyatao_beizhu"];
$zhengji_jiaozhengqi_bankou = $_POST["zhengji_jiaozhengqi_bankou"];
$zhengji_jiaozhengqi_bankou_beizhu = $_POST["zhengji_jiaozhengqi_bankou_beizhu"];
$zhengji_luoxuankuogongqi = $_POST["zhengji_luoxuankuogongqi"];
$zhengji_luoxuankuogongqi_beizhu = $_POST["zhengji_luoxuankuogongqi_beizhu"];
$zhengji_zuhanqi = $_POST["zhengji_zuhanqi"];
$zhengji_zuhanqi_beizhu = $_POST["zhengji_zuhanqi_beizhu"];
$jingmifujian_shuandaofuzhuoti = $_POST["jingmifujian_shuandaofuzhuoti"];
$jingmifujian_shuandaofuzhuoti_beizhu = $_POST["jingmifujian_shuandaofuzhuoti_beizhu"];
$jingmifujian_qiumaofuzhuoti = $_POST["jingmifujian_qiumaofuzhuoti"];
$jingmifujian_qiumaofuzhuoti_beizhu = $_POST["jingmifujian_qiumaofuzhuoti_beizhu"];
$jingmifujian_cixingfuzhuoti = $_POST["jingmifujian_cixingfuzhuoti"];
$jingmifujian_cixingfuzhuoti_beizhu = $_POST["jingmifujian_cixingfuzhuoti_beizhu"];
$jingmifujian_mk1 = $_POST["jingmifujian_mk1"];
$jingmifujian_mk1_beizhu = $_POST["jingmifujian_mk1_beizhu"];
$jingmifujian_taijikou = $_POST["jingmifujian_taijikou"];
$jingmifujian_taijikou_beizhu = $_POST["jingmifujian_taijikou_beizhu"];
$jingmifujian_taotongguan = $_POST["jingmifujian_taotongguan"];
$jingmifujian_taotongguan_beizhu = $_POST["jingmifujian_taotongguan_beizhu"];
$sandi_shuzhimoxing_bankou = $_POST["sandi_shuzhimoxing_bankou"];
$sandi_shuzhimoxing_bankou_beizhu = $_POST["sandi_shuzhimoxing_bankou_beizhu"];
$sandi_shuzhimoxing_quankou = $_POST["sandi_shuzhimoxing_quankou"];
$sandi_shuzhimoxing_quankou_beizhu = $_POST["sandi_shuzhimoxing_quankou_beizhu"];
//连接数据库
$mysqli = @new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123");
if (!$mysqli) {
	die("Couldn't connect:".mysqli_error($mysqli));
}
//创建数据库
if (mysqli_query($mysqli,'CREATE DATABASE maierlefu')) {
	echo "Customer database successfully created"."<br/>";
}else{
	echo "Customer database creation failed: ".mysqli_error($mysqli)."<br/>";
}
//选择数据库
mysqli_select_db($mysqli,"maierlefu");
mysqli_query($mysqli,"set names utf8");
//创建表格
$createTableCommand = "CREATE TABLE pricelist(
zhongzhi_hanguo_chuntai_gexinghuayitiguan varchar(50),
zhongzhi_hanguo_chuntai_gexinghuayitiguan_beizhu varchar(50),
zhongzhi_oumei_chuntai_gexinghuayitiguan varchar(50),
zhongzhi_oumei_chuntai_gexinghuayitiguan_beizhu varchar(50),
zhongzhi_guochanyanghuagao_gexinghuayitiguan varchar(50),
zhongzhi_guochanyanghuagao_gexinghuayitiguan_beizhu varchar(50),
zhongzhi_weilande_gexinghuayitiguan varchar(50),
zhongzhi_weilande_gexinghuayitiguan_beizhu varchar(50),
zhongzhi_bego_guge_gexinghuayitiguan varchar(50),
zhongzhi_bego_guge_gexinghuayitiguan_beizhu varchar(50),
zhongzhi_zhongzhiganka varchar(50),
zhongzhi_zhongzhiganka_beizhu varchar(50),
zhongzhi_hanguo_chuntai_gexinghuajitai varchar(50),
zhongzhi_hanguo_chuntai_gexinghuajitai_beizhu varchar(50),
zhongzhi_hanguo_yanghuagao_gexinghuajitai varchar(50),
zhongzhi_hanguo_yanghuagao_gexinghuajitai_beizhu varchar(50),
zhongzhi_oumei_chuntai_gexinghuajitai varchar(50),
zhongzhi_oumei_chuntai_gexinghuajitai_beizhu varchar(50),
zhongzhi_oumei_yanghuagao_gexinghuajitai varchar(50),
zhongzhi_oumei_yanghuagao_gexinghuajitai_beizhu varchar(50),
zhongzhi_yanghuagao_quangao varchar(50),
zhongzhi_yanghuagao_quangao_beizhu varchar(50),
zhongzhi_weilande_quangao varchar(50),
zhongzhi_weilande_quangao_beizhu varchar(50),
zhongzhi_bianselong_quangao varchar(50),
zhongzhi_bianselong_quangao_beizhu varchar(50),
zhongzhi_yanghuagao_quanci varchar(50),
zhongzhi_yanghuagao_quanci_beizhu varchar(50),
zhongzhi_weilande_quanci varchar(50),
zhongzhi_weilande_quanci_beizhu varchar(50),
zhongzhi_bianselong_quanci varchar(50),
zhongzhi_bianselong_quanci_beizhu varchar(50),
zhongzhi_bego_guge_guan varchar(50),
zhongzhi_bego_guge_guan_beizhu varchar(50),
zhongzhi_bego_guge_kaoci varchar(50),
zhongzhi_bego_guge_kaoci_beizhu varchar(50),
zhongzhi_sandi_guge_guan varchar(50),
zhongzhi_sandi_guge_guan_beizhu varchar(50),
zhongzhi_sandi_guge_kaoci varchar(50),
zhongzhi_sandi_guge_kaoci_beizhu varchar(50),
zhongzhi_sandi_chuntai_guan varchar(50),
zhongzhi_sandi_chuntai_guan_beizhu varchar(50),
zhongzhi_sandi_chuntai_kaosu varchar(50),
zhongzhi_sandi_chuntai_kaosu_beizhu varchar(50),
zhongzhi_sandi_daoban varchar(50),
zhongzhi_sandi_daoban_beizhu varchar(50),
zhongzhi_sandi_daoban_meiduoyikong varchar(50),
zhongzhi_sandi_daoban_meiduoyikong_beizhu varchar(50),
zhongzhi_aregen_jin_kaosu_ya_59_9_percent varchar(50),
zhongzhi_aregen_jin_kaosu_ya_59_9_percent_beizhu varchar(50),
zhongzhi_aregen_jin_kaosu_ya_74_percent varchar(50),
zhongzhi_aregen_jin_kaosu_ya_74_percent_beizhu varchar(50),
zhongzhi_aregen_jin_kaosu_ya_89_5_percent varchar(50),
zhongzhi_aregen_jin_kaosu_ya_89_5_percent_beizhu varchar(50),
zhongzhi_aregen_jin_kaoci_ya_74_percent varchar(50),
zhongzhi_aregen_jin_kaoci_ya_74_percent_beizhu varchar(50),
zhongzhi_aregen_jin_kaoci_ya_89_5_percent varchar(50),
zhongzhi_aregen_jin_kaoci_ya_89_5_percent_beizhu varchar(50),
guding_guochanyanghuagao_quangao varchar(50),
guding_guochanyanghuagao_quangao_beizhu varchar(50),
guding_guochanyanghuagao_quanci varchar(50),
guding_guochanyanghuagao_quanci_beizhu varchar(50),
guding_guochanyanghuagao_zhuanghe varchar(50),
guding_guochanyanghuagao_zhuanghe_beizhu varchar(50),
guding_weilande_quangao varchar(50),
guding_weilande_quangao_beizhu varchar(50),
guding_weilande_quanci varchar(50),
guding_weilande_quanci_beizhu varchar(50),
guding_lava_quangao varchar(50),
guding_lava_quangao_beizhu varchar(50),
guding_lava_quanci varchar(50),
guding_lava_quanci_beizhu varchar(50),
guding_bianselong_quangao varchar(50),
guding_bianselong_quangao_beizhu varchar(50),
guding_bianselong_quanci varchar(50),
guding_bianselong_quanci_beizhu varchar(50),
guding_sandi_guge_zhuanghe varchar(50),
guding_sandi_guge_zhuanghe_beizhu varchar(50),
guding_sandi_guge_qianti varchar(50),
guding_sandi_guge_qianti_beizhu varchar(50),
guding_sandi_guge_guan varchar(50),
guding_sandi_guge_guan_beizhu varchar(50),
guding_sandi_guge_kaoci varchar(50),
guding_sandi_guge_kaoci_beizhu varchar(50),
guding_sandi_chuntai_zhuanghe varchar(50),
guding_sandi_chuntai_zhuanghe_beizhu varchar(50),
guding_sandi_chuntai_qianti varchar(50),
guding_sandi_chuntai_qianti_beizhu varchar(50),
guding_sandi_chuntai_guan varchar(50),
guding_sandi_chuntai_guan_beizhu varchar(50),
guding_sandi_chuntai_juheci varchar(50),
guding_sandi_chuntai_juheci_beizhu varchar(50),
guding_bego_guge_zhuanghe varchar(50),
guding_bego_guge_zhuanghe_beizhu varchar(50),
guding_bego_guge_qianti varchar(50),
guding_bego_guge_qianti_beizhu varchar(50),
guding_bego_guge_guan varchar(50),
guding_bego_guge_guan_beizhu varchar(50),
guding_bego_guge_kaoci varchar(50),
guding_bego_guge_kaoci_beizhu varchar(50),
guding_bego_guge_juheci varchar(50),
guding_bego_guge_juheci_beizhu varchar(50),
guding_juheci_qianti varchar(50),
guding_juheci_qianti_beizhu varchar(50),
guding_aregen_jin_kaoci_ya_59_9_percent varchar(50),
guding_aregen_jin_kaoci_ya_59_9_percent_beizhu varchar(50),
guding_aregen_jin_kaoci_ya_74_percent varchar(50),
guding_aregen_jin_kaoci_ya_74_percent_beizhu varchar(50),
guding_aregen_jin_kaoci_ya_89_5_percent varchar(50),
guding_aregen_jin_kaoci_ya_89_5_percent_beizhu varchar(50),
guding_aregen_jin_kaosu_ya_59_9_percent varchar(50),
guding_aregen_jin_kaosu_ya_59_9_percent_beizhu varchar(50),
guding_aregen_jin_kaosu_ya_74_percent varchar(50),
guding_aregen_jin_kaosu_ya_74_percent_beizhu varchar(50),
guding_aregen_jin_kaosu_ya_89_5_percent varchar(50),
guding_aregen_jin_kaosu_ya_89_5_percent_beizhu varchar(50),
guding_aregen_jin_guan_59_9_percent varchar(50),
guding_aregen_jin_guan_59_9_percent_beizhu varchar(50),
guding_aregen_jin_guan_74_percent varchar(50),
guding_aregen_jin_guan_74_percent_beizhu varchar(50),
guding_aregen_jin_guan_89_5_percent varchar(50),
guding_aregen_jin_guan_89_5_percent_beizhu varchar(50),
guding_aregen_jin_qianti_59_9_percent varchar(50),
guding_aregen_jin_qianti_59_9_percent_beizhu varchar(50),
guding_aregen_jin_qianti_74_percent varchar(50),
guding_aregen_jin_qianti_74_percent_beizhu varchar(50),
guding_aregen_jin_qianti_89_5_percent varchar(50),
guding_aregen_jin_qianti_89_5_percent_beizhu varchar(50),
guding_aregen_jin_zhuanghe_59_9_percent varchar(50),
guding_aregen_jin_zhuanghe_59_9_percent_beizhu varchar(50),
guding_aregen_jin_zhuanghe_74_percent varchar(50),
guding_aregen_jin_zhuanghe_74_percent_beizhu varchar(50),
guding_aregen_jin_zhuanghe_89_5_percent varchar(50),
guding_aregen_jin_zhuanghe_89_5_percent_beizhu varchar(50),
guding_linshiguan_cad varchar(50),
guding_linshiguan_cad_beizhu varchar(50),
guding_linshiguan_cam varchar(50),
guding_linshiguan_cam_beizhu varchar(50),
guding_laxingsheji varchar(50),
guding_laxingsheji_beizhu varchar(50),
guding_jiantaici varchar(50),
guding_jiantaici_beizhu varchar(50),
guding_yayinci varchar(50),
guding_yayinci_beizhu varchar(50),
huodong_sandi_zhijia_da_guge varchar(50),
huodong_sandi_zhijia_da_guge_beizhu varchar(50),
huodong_sandi_zhijia_xiao_guge varchar(50),
huodong_sandi_zhijia_xiao_guge_beizhu varchar(50),
huodong_sandi_zhijia_da_chuntai varchar(50),
huodong_sandi_zhijia_da_chuntai_beizhu varchar(50),
huodong_sandi_zhijia_xiao_chuntai varchar(50),
huodong_sandi_zhijia_xiao_chuntai_beizhu varchar(50),
huodong_zhijia_da_bego varchar(50),
huodong_zhijia_da_bego_beizhu varchar(50),
huodong_zhijia_xiao_bego varchar(50),
huodong_zhijia_xiao_bego_beizhu varchar(50),
huodong_zhijia_da_nuobiling varchar(50),
huodong_zhijia_da_nuobiling_beizhu varchar(50),
huodong_zhijia_xiao_nuobiling varchar(50),
huodong_zhijia_xiao_nuobiling_beizhu varchar(50),
huodong_zhijia_da_weitaling_2000 varchar(50),
huodong_zhijia_da_weitaling_2000_beizhu varchar(50),
huodong_zhijia_xiao_weitaling_2000 varchar(50),
huodong_zhijia_xiao_weitaling_2000_beizhu varchar(50),
huodong_paiya_kaifeng_zhusuzhuya varchar(50),
huodong_paiya_kaifeng_zhusuzhuya_beizhu varchar(50),
huodong_paiya_kaifeng_zhusuzhuya_labor varchar(50),
huodong_paiya_kaifeng_zhusuzhuya_labor_beizhu varchar(50),
huodong_paiya_kaijing_zhusuzhuya varchar(50),
huodong_paiya_kaijing_zhusuzhuya_beizhu varchar(50),
huodong_paiya_kaijing_zhusuzhuya_labor varchar(50),
huodong_paiya_kaijing_zhusuzhuya_labor_beizhu varchar(50),
huodong_paiya_shofu_zhusuzhuya varchar(50),
huodong_paiya_shofu_zhusuzhuya_beizhu varchar(50),
huodong_paiya_shofu_zhusuzhuya_labor varchar(50),
huodong_paiya_shofu_zhusuzhuya_labor_beizhu varchar(50),
huodong_paiya_changzhengzhong_putong_zhusuzhuya varchar(50),
huodong_paiya_changzhengzhong_putong_zhusuzhuya_beizhu varchar(50),
huodong_paiya_changzhengzhong_putong_zhusuzhuya_labor varchar(50),
huodong_paiya_changzhengzhong_putong_zhusuzhuya_labor_beizhu varchar(50),
huodong_paiya_changzhengzhong_chaoying_zhusuzhuya varchar(50),
huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_beizhu varchar(50),
huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_labor varchar(50),
huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_labor_beizhu varchar(50),
huodong_jiaotuo_suliaotuoya varchar(50),
huodong_jiaotuo_suliaotuoya_beizhu varchar(50),
huodong_jiaotuo_gexinghuatuopan varchar(50),
huodong_jiaotuo_gexinghuatuopan_beizhu varchar(50),
huodong_jiaotuo_jinshuhedian varchar(50),
huodong_jiaotuo_jinshuhedian_beizhu varchar(50),
huodong_jiaotuo_jinshuhemian varchar(50),
huodong_jiaotuo_jinshuhemian_beizhu varchar(50),
huodong_jiaotuo_zhuzaohezhituo varchar(50),
huodong_jiaotuo_zhuzaohezhituo_beizhu varchar(50),
huodong_jiaotuo_chengpinwang varchar(50),
huodong_jiaotuo_chengpinwang_beizhu varchar(50),
huodong_yinxingyichi_da varchar(50),
huodong_yinxingyichi_da_beizhu varchar(50),
huodong_yinxingyichi_xiao varchar(50),
huodong_yinxingyichi_xiao_beizhu varchar(50),
huodong_zhusuzhuya_bankou varchar(50),
huodong_zhusuzhuya_bankou_beizhu varchar(50),
huodong_zhusuzhuya_quankou varchar(50),
huodong_zhusuzhuya_quankou_beizhu varchar(50),
meixue_meibaichaobaotiemian varchar(50),
meixue_meibaichaobaotiemian_beizhu varchar(50),
meixue_maierfangshengquangao varchar(50),
meixue_maierfangshengquangao_beizhu varchar(50),
meixue_maierfangshengquanci varchar(50),
meixue_maierfangshengquanci_beizhu varchar(50),
meixue_zhuci_quanguan varchar(50),
meixue_zhuci_quanguan_beizhu varchar(50),
meixue_zhuci_qianti varchar(50),
meixue_zhuci_qianti_beizhu varchar(50),
meixue_bolitaoci_tiemian varchar(50),
meixue_bolitaoci_tiemian_beizhu varchar(50),
meixue_bolitaoci_qianti varchar(50),
meixue_bolitaoci_qianti_beizhu varchar(50),
meixue_bolitaoci_quanguan varchar(50),
meixue_bolitaoci_quanguan_beizhu varchar(50),
meixue_meixuezhenduanla varchar(50),
meixue_meixuezhenduanla_beizhu varchar(50),
zhengji_yinxingbaochiqi_bankou varchar(50),
zhengji_yinxingbaochiqi_bankou_beizhu varchar(50),
zhengji_wanzhibaochiqi_bankou varchar(50),
zhengji_wanzhibaochiqi_bankou_beizhu varchar(50),
zhengji_jianxibaochiqi varchar(50),
zhengji_jianxibaochiqi_beizhu varchar(50),
zhengji_yemoyatao varchar(50),
zhengji_yemoyatao_beizhu varchar(50),
zhengji_jiaozhengqi_bankou varchar(50),
zhengji_jiaozhengqi_bankou_beizhu varchar(50),
zhengji_luoxuankuogongqi varchar(50),
zhengji_luoxuankuogongqi_beizhu varchar(50),
zhengji_zuhanqi varchar(50),
zhengji_zuhanqi_beizhu varchar(50),
jingmifujian_shuandaofuzhuoti varchar(50),
jingmifujian_shuandaofuzhuoti_beizhu varchar(50),
jingmifujian_qiumaofuzhuoti varchar(50),
jingmifujian_qiumaofuzhuoti_beizhu varchar(50),
jingmifujian_cixingfuzhuoti varchar(50),
jingmifujian_cixingfuzhuoti_beizhu varchar(50),
jingmifujian_mk1 varchar(50),
jingmifujian_mk1_beizhu varchar(50),
jingmifujian_taijikou varchar(50),
jingmifujian_taijikou_beizhu varchar(50),
jingmifujian_taotongguan varchar(50),
jingmifujian_taotongguan_beizhu varchar(50),
sandi_shuzhimoxing_bankou varchar(50),
sandi_shuzhimoxing_bankou_beizhu varchar(50),
sandi_shuzhimoxing_quankou varchar(50),
sandi_shuzhimoxing_quankou_beizhu varchar(50)
)DEFAULT CHARSET=utf8";
if (mysqli_query($mysqli, $createTableCommand)) {
	echo "Table successfully created!"."<br/>";
}else{
	echo "Creating table failed: ".mysqli_error($mysqli)."<br/>";
}
//插入表格
$insertCommand = "INSERT INTO pricelist(
zhongzhi_hanguo_chuntai_gexinghuayitiguan,
zhongzhi_hanguo_chuntai_gexinghuayitiguan_beizhu,
zhongzhi_oumei_chuntai_gexinghuayitiguan,
zhongzhi_oumei_chuntai_gexinghuayitiguan_beizhu,
zhongzhi_guochanyanghuagao_gexinghuayitiguan,
zhongzhi_guochanyanghuagao_gexinghuayitiguan_beizhu,
zhongzhi_weilande_gexinghuayitiguan,
zhongzhi_weilande_gexinghuayitiguan_beizhu,
zhongzhi_bego_guge_gexinghuayitiguan,
zhongzhi_bego_guge_gexinghuayitiguan_beizhu,
zhongzhi_zhongzhiganka,
zhongzhi_zhongzhiganka_beizhu,
zhongzhi_hanguo_chuntai_gexinghuajitai,
zhongzhi_hanguo_chuntai_gexinghuajitai_beizhu,
zhongzhi_hanguo_yanghuagao_gexinghuajitai,
zhongzhi_hanguo_yanghuagao_gexinghuajitai_beizhu,
zhongzhi_oumei_chuntai_gexinghuajitai,
zhongzhi_oumei_chuntai_gexinghuajitai_beizhu,
zhongzhi_oumei_yanghuagao_gexinghuajitai,
zhongzhi_oumei_yanghuagao_gexinghuajitai_beizhu,
zhongzhi_yanghuagao_quangao,
zhongzhi_yanghuagao_quangao_beizhu,
zhongzhi_weilande_quangao,
zhongzhi_weilande_quangao_beizhu,
zhongzhi_bianselong_quangao,
zhongzhi_bianselong_quangao_beizhu,
zhongzhi_yanghuagao_quanci,
zhongzhi_yanghuagao_quanci_beizhu,
zhongzhi_weilande_quanci,
zhongzhi_weilande_quanci_beizhu,
zhongzhi_bianselong_quanci,
zhongzhi_bianselong_quanci_beizhu,
zhongzhi_bego_guge_guan,
zhongzhi_bego_guge_guan_beizhu,
zhongzhi_bego_guge_kaoci,
zhongzhi_bego_guge_kaoci_beizhu,
zhongzhi_sandi_guge_guan,
zhongzhi_sandi_guge_guan_beizhu,
zhongzhi_sandi_guge_kaoci,
zhongzhi_sandi_guge_kaoci_beizhu,
zhongzhi_sandi_chuntai_guan,
zhongzhi_sandi_chuntai_guan_beizhu,
zhongzhi_sandi_chuntai_kaosu,
zhongzhi_sandi_chuntai_kaosu_beizhu,
zhongzhi_sandi_daoban,
zhongzhi_sandi_daoban_beizhu,
zhongzhi_sandi_daoban_meiduoyikong,
zhongzhi_sandi_daoban_meiduoyikong_beizhu,
zhongzhi_aregen_jin_kaosu_ya_59_9_percent,
zhongzhi_aregen_jin_kaosu_ya_59_9_percent_beizhu,
zhongzhi_aregen_jin_kaosu_ya_74_percent,
zhongzhi_aregen_jin_kaosu_ya_74_percent_beizhu,
zhongzhi_aregen_jin_kaosu_ya_89_5_percent,
zhongzhi_aregen_jin_kaosu_ya_89_5_percent_beizhu,
zhongzhi_aregen_jin_kaoci_ya_74_percent,
zhongzhi_aregen_jin_kaoci_ya_74_percent_beizhu,
zhongzhi_aregen_jin_kaoci_ya_89_5_percent,
zhongzhi_aregen_jin_kaoci_ya_89_5_percent_beizhu,
guding_guochanyanghuagao_quangao,
guding_guochanyanghuagao_quangao_beizhu,
guding_guochanyanghuagao_quanci,
guding_guochanyanghuagao_quanci_beizhu,
guding_guochanyanghuagao_zhuanghe,
guding_guochanyanghuagao_zhuanghe_beizhu,
guding_weilande_quangao,
guding_weilande_quangao_beizhu,
guding_weilande_quanci,
guding_weilande_quanci_beizhu,
guding_lava_quangao,
guding_lava_quangao_beizhu,
guding_lava_quanci,
guding_lava_quanci_beizhu,
guding_bianselong_quangao,
guding_bianselong_quangao_beizhu,
guding_bianselong_quanci,
guding_bianselong_quanci_beizhu,
guding_sandi_guge_zhuanghe,
guding_sandi_guge_zhuanghe_beizhu,
guding_sandi_guge_qianti,
guding_sandi_guge_qianti_beizhu,
guding_sandi_guge_guan,
guding_sandi_guge_guan_beizhu,
guding_sandi_guge_kaoci,
guding_sandi_guge_kaoci_beizhu,
guding_sandi_chuntai_zhuanghe,
guding_sandi_chuntai_zhuanghe_beizhu,
guding_sandi_chuntai_qianti,
guding_sandi_chuntai_qianti_beizhu,
guding_sandi_chuntai_guan,
guding_sandi_chuntai_guan_beizhu,
guding_sandi_chuntai_juheci,
guding_sandi_chuntai_juheci_beizhu,
guding_bego_guge_zhuanghe,
guding_bego_guge_zhuanghe_beizhu,
guding_bego_guge_qianti,
guding_bego_guge_qianti_beizhu,
guding_bego_guge_guan,
guding_bego_guge_guan_beizhu,
guding_bego_guge_kaoci,
guding_bego_guge_kaoci_beizhu,
guding_bego_guge_juheci,
guding_bego_guge_juheci_beizhu,
guding_juheci_qianti,
guding_juheci_qianti_beizhu,
guding_aregen_jin_kaoci_ya_59_9_percent,
guding_aregen_jin_kaoci_ya_59_9_percent_beizhu,
guding_aregen_jin_kaoci_ya_74_percent,
guding_aregen_jin_kaoci_ya_74_percent_beizhu,
guding_aregen_jin_kaoci_ya_89_5_percent,
guding_aregen_jin_kaoci_ya_89_5_percent_beizhu,
guding_aregen_jin_kaosu_ya_59_9_percent,
guding_aregen_jin_kaosu_ya_59_9_percent_beizhu,
guding_aregen_jin_kaosu_ya_74_percent,
guding_aregen_jin_kaosu_ya_74_percent_beizhu,
guding_aregen_jin_kaosu_ya_89_5_percent,
guding_aregen_jin_kaosu_ya_89_5_percent_beizhu,
guding_aregen_jin_guan_59_9_percent,
guding_aregen_jin_guan_59_9_percent_beizhu,
guding_aregen_jin_guan_74_percent,
guding_aregen_jin_guan_74_percent_beizhu,
guding_aregen_jin_guan_89_5_percent,
guding_aregen_jin_guan_89_5_percent_beizhu,
guding_aregen_jin_qianti_59_9_percent,
guding_aregen_jin_qianti_59_9_percent_beizhu,
guding_aregen_jin_qianti_74_percent,
guding_aregen_jin_qianti_74_percent_beizhu,
guding_aregen_jin_qianti_89_5_percent,
guding_aregen_jin_qianti_89_5_percent_beizhu,
guding_aregen_jin_zhuanghe_59_9_percent,
guding_aregen_jin_zhuanghe_59_9_percent_beizhu,
guding_aregen_jin_zhuanghe_74_percent,
guding_aregen_jin_zhuanghe_74_percent_beizhu,
guding_aregen_jin_zhuanghe_89_5_percent,
guding_aregen_jin_zhuanghe_89_5_percent_beizhu,
guding_linshiguan_cad,
guding_linshiguan_cad_beizhu,
guding_linshiguan_cam,
guding_linshiguan_cam_beizhu,
guding_laxingsheji,
guding_laxingsheji_beizhu,
guding_jiantaici,
guding_jiantaici_beizhu,
guding_yayinci,
guding_yayinci_beizhu,
huodong_sandi_zhijia_da_guge,
huodong_sandi_zhijia_da_guge_beizhu,
huodong_sandi_zhijia_xiao_guge,
huodong_sandi_zhijia_xiao_guge_beizhu,
huodong_sandi_zhijia_da_chuntai,
huodong_sandi_zhijia_da_chuntai_beizhu,
huodong_sandi_zhijia_xiao_chuntai,
huodong_sandi_zhijia_xiao_chuntai_beizhu,
huodong_zhijia_da_bego,
huodong_zhijia_da_bego_beizhu,
huodong_zhijia_xiao_bego,
huodong_zhijia_xiao_bego_beizhu,
huodong_zhijia_da_nuobiling,
huodong_zhijia_da_nuobiling_beizhu,
huodong_zhijia_xiao_nuobiling,
huodong_zhijia_xiao_nuobiling_beizhu,
huodong_zhijia_da_weitaling_2000,
huodong_zhijia_da_weitaling_2000_beizhu,
huodong_zhijia_xiao_weitaling_2000,
huodong_zhijia_xiao_weitaling_2000_beizhu,
huodong_paiya_kaifeng_zhusuzhuya,
huodong_paiya_kaifeng_zhusuzhuya_beizhu,
huodong_paiya_kaifeng_zhusuzhuya_labor,
huodong_paiya_kaifeng_zhusuzhuya_labor_beizhu,
huodong_paiya_kaijing_zhusuzhuya,
huodong_paiya_kaijing_zhusuzhuya_beizhu,
huodong_paiya_kaijing_zhusuzhuya_labor,
huodong_paiya_kaijing_zhusuzhuya_labor_beizhu,
huodong_paiya_shofu_zhusuzhuya,
huodong_paiya_shofu_zhusuzhuya_beizhu,
huodong_paiya_shofu_zhusuzhuya_labor,
huodong_paiya_shofu_zhusuzhuya_labor_beizhu,
huodong_paiya_changzhengzhong_putong_zhusuzhuya,
huodong_paiya_changzhengzhong_putong_zhusuzhuya_beizhu,
huodong_paiya_changzhengzhong_putong_zhusuzhuya_labor,
huodong_paiya_changzhengzhong_putong_zhusuzhuya_labor_beizhu,
huodong_paiya_changzhengzhong_chaoying_zhusuzhuya,
huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_beizhu,
huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_labor,
huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_labor_beizhu,
huodong_jiaotuo_suliaotuoya,
huodong_jiaotuo_suliaotuoya_beizhu,
huodong_jiaotuo_gexinghuatuopan,
huodong_jiaotuo_gexinghuatuopan_beizhu,
huodong_jiaotuo_jinshuhedian,
huodong_jiaotuo_jinshuhedian_beizhu,
huodong_jiaotuo_jinshuhemian,
huodong_jiaotuo_jinshuhemian_beizhu,
huodong_jiaotuo_zhuzaohezhituo,
huodong_jiaotuo_zhuzaohezhituo_beizhu,
huodong_jiaotuo_chengpinwang,
huodong_jiaotuo_chengpinwang_beizhu,
huodong_yinxingyichi_da,
huodong_yinxingyichi_da_beizhu,
huodong_yinxingyichi_xiao,
huodong_yinxingyichi_xiao_beizhu,
huodong_zhusuzhuya_bankou,
huodong_zhusuzhuya_bankou_beizhu,
huodong_zhusuzhuya_quankou,
huodong_zhusuzhuya_quankou_beizhu,
meixue_meibaichaobaotiemian,
meixue_meibaichaobaotiemian_beizhu,
meixue_maierfangshengquangao,
meixue_maierfangshengquangao_beizhu,
meixue_maierfangshengquanci,
meixue_maierfangshengquanci_beizhu,
meixue_zhuci_quanguan,
meixue_zhuci_quanguan_beizhu,
meixue_zhuci_qianti,
meixue_zhuci_qianti_beizhu,
meixue_bolitaoci_tiemian,
meixue_bolitaoci_tiemian_beizhu,
meixue_bolitaoci_qianti,
meixue_bolitaoci_qianti_beizhu,
meixue_bolitaoci_quanguan,
meixue_bolitaoci_quanguan_beizhu,
meixue_meixuezhenduanla,
meixue_meixuezhenduanla_beizhu,
zhengji_yinxingbaochiqi_bankou,
zhengji_yinxingbaochiqi_bankou_beizhu,
zhengji_wanzhibaochiqi_bankou,
zhengji_wanzhibaochiqi_bankou_beizhu,
zhengji_jianxibaochiqi,
zhengji_jianxibaochiqi_beizhu,
zhengji_yemoyatao,
zhengji_yemoyatao_beizhu,
zhengji_jiaozhengqi_bankou,
zhengji_jiaozhengqi_bankou_beizhu,
zhengji_luoxuankuogongqi,
zhengji_luoxuankuogongqi_beizhu,
zhengji_zuhanqi,
zhengji_zuhanqi_beizhu,
jingmifujian_shuandaofuzhuoti,
jingmifujian_shuandaofuzhuoti_beizhu,
jingmifujian_qiumaofuzhuoti,
jingmifujian_qiumaofuzhuoti_beizhu,
jingmifujian_cixingfuzhuoti,
jingmifujian_cixingfuzhuoti_beizhu,
jingmifujian_mk1,
jingmifujian_mk1_beizhu,
jingmifujian_taijikou,
jingmifujian_taijikou_beizhu,
jingmifujian_taotongguan,
jingmifujian_taotongguan_beizhu,
sandi_shuzhimoxing_bankou,
sandi_shuzhimoxing_bankou_beizhu,
sandi_shuzhimoxing_quankou,
sandi_shuzhimoxing_quankou_beizhu
)VALUES(
'$zhongzhi_hanguo_chuntai_gexinghuayitiguan',
'$zhongzhi_hanguo_chuntai_gexinghuayitiguan_beizhu',
'$zhongzhi_oumei_chuntai_gexinghuayitiguan',
'$zhongzhi_oumei_chuntai_gexinghuayitiguan_beizhu',
'$zhongzhi_guochanyanghuagao_gexinghuayitiguan',
'$zhongzhi_guochanyanghuagao_gexinghuayitiguan_beizhu',
'$zhongzhi_weilande_gexinghuayitiguan',
'$zhongzhi_weilande_gexinghuayitiguan_beizhu',
'$zhongzhi_bego_guge_gexinghuayitiguan',
'$zhongzhi_bego_guge_gexinghuayitiguan_beizhu',
'$zhongzhi_zhongzhiganka',
'$zhongzhi_zhongzhiganka_beizhu',
'$zhongzhi_hanguo_chuntai_gexinghuajitai',
'$zhongzhi_hanguo_chuntai_gexinghuajitai_beizhu',
'$zhongzhi_hanguo_yanghuagao_gexinghuajitai',
'$zhongzhi_hanguo_yanghuagao_gexinghuajitai_beizhu',
'$zhongzhi_oumei_chuntai_gexinghuajitai',
'$zhongzhi_oumei_chuntai_gexinghuajitai_beizhu',
'$zhongzhi_oumei_yanghuagao_gexinghuajitai',
'$zhongzhi_oumei_yanghuagao_gexinghuajitai_beizhu',
'$zhongzhi_yanghuagao_quangao',
'$zhongzhi_yanghuagao_quangao_beizhu',
'$zhongzhi_weilande_quangao',
'$zhongzhi_weilande_quangao_beizhu',
'$zhongzhi_bianselong_quangao',
'$zhongzhi_bianselong_quangao_beizhu',
'$zhongzhi_yanghuagao_quanci',
'$zhongzhi_yanghuagao_quanci_beizhu',
'$zhongzhi_weilande_quanci',
'$zhongzhi_weilande_quanci_beizhu',
'$zhongzhi_bianselong_quanci',
'$zhongzhi_bianselong_quanci_beizhu',
'$zhongzhi_bego_guge_guan',
'$zhongzhi_bego_guge_guan_beizhu',
'$zhongzhi_bego_guge_kaoci',
'$zhongzhi_bego_guge_kaoci_beizhu',
'$zhongzhi_sandi_guge_guan',
'$zhongzhi_sandi_guge_guan_beizhu',
'$zhongzhi_sandi_guge_kaoci',
'$zhongzhi_sandi_guge_kaoci_beizhu',
'$zhongzhi_sandi_chuntai_guan',
'$zhongzhi_sandi_chuntai_guan_beizhu',
'$zhongzhi_sandi_chuntai_kaosu',
'$zhongzhi_sandi_chuntai_kaosu_beizhu',
'$zhongzhi_sandi_daoban',
'$zhongzhi_sandi_daoban_beizhu',
'$zhongzhi_sandi_daoban_meiduoyikong',
'$zhongzhi_sandi_daoban_meiduoyikong_beizhu',
'$zhongzhi_aregen_jin_kaosu_ya_59_9_percent',
'$zhongzhi_aregen_jin_kaosu_ya_59_9_percent_beizhu',
'$zhongzhi_aregen_jin_kaosu_ya_74_percent',
'$zhongzhi_aregen_jin_kaosu_ya_74_percent_beizhu',
'$zhongzhi_aregen_jin_kaosu_ya_89_5_percent',
'$zhongzhi_aregen_jin_kaosu_ya_89_5_percent_beizhu',
'$zhongzhi_aregen_jin_kaoci_ya_74_percent',
'$zhongzhi_aregen_jin_kaoci_ya_74_percent_beizhu',
'$zhongzhi_aregen_jin_kaoci_ya_89_5_percent',
'$zhongzhi_aregen_jin_kaoci_ya_89_5_percent_beizhu',
'$guding_guochanyanghuagao_quangao',
'$guding_guochanyanghuagao_quangao_beizhu',
'$guding_guochanyanghuagao_quanci',
'$guding_guochanyanghuagao_quanci_beizhu',
'$guding_guochanyanghuagao_zhuanghe',
'$guding_guochanyanghuagao_zhuanghe_beizhu',
'$guding_weilande_quangao',
'$guding_weilande_quangao_beizhu',
'$guding_weilande_quanci',
'$guding_weilande_quanci_beizhu',
'$guding_lava_quangao',
'$guding_lava_quangao_beizhu',
'$guding_lava_quanci',
'$guding_lava_quanci_beizhu',
'$guding_bianselong_quangao',
'$guding_bianselong_quangao_beizhu',
'$guding_bianselong_quanci',
'$guding_bianselong_quanci_beizhu',
'$guding_sandi_guge_zhuanghe',
'$guding_sandi_guge_zhuanghe_beizhu',
'$guding_sandi_guge_qianti',
'$guding_sandi_guge_qianti_beizhu',
'$guding_sandi_guge_guan',
'$guding_sandi_guge_guan_beizhu',
'$guding_sandi_guge_kaoci',
'$guding_sandi_guge_kaoci_beizhu',
'$guding_sandi_chuntai_zhuanghe',
'$guding_sandi_chuntai_zhuanghe_beizhu',
'$guding_sandi_chuntai_qianti',
'$guding_sandi_chuntai_qianti_beizhu',
'$guding_sandi_chuntai_guan',
'$guding_sandi_chuntai_guan_beizhu',
'$guding_sandi_chuntai_juheci',
'$guding_sandi_chuntai_juheci_beizhu',
'$guding_bego_guge_zhuanghe',
'$guding_bego_guge_zhuanghe_beizhu',
'$guding_bego_guge_qianti',
'$guding_bego_guge_qianti_beizhu',
'$guding_bego_guge_guan',
'$guding_bego_guge_guan_beizhu',
'$guding_bego_guge_kaoci',
'$guding_bego_guge_kaoci_beizhu',
'$guding_bego_guge_juheci',
'$guding_bego_guge_juheci_beizhu',
'$guding_juheci_qianti',
'$guding_juheci_qianti_beizhu',
'$guding_aregen_jin_kaoci_ya_59_9_percent',
'$guding_aregen_jin_kaoci_ya_59_9_percent_beizhu',
'$guding_aregen_jin_kaoci_ya_74_percent',
'$guding_aregen_jin_kaoci_ya_74_percent_beizhu',
'$guding_aregen_jin_kaoci_ya_89_5_percent',
'$guding_aregen_jin_kaoci_ya_89_5_percent_beizhu',
'$guding_aregen_jin_kaosu_ya_59_9_percent',
'$guding_aregen_jin_kaosu_ya_59_9_percent_beizhu',
'$guding_aregen_jin_kaosu_ya_74_percent',
'$guding_aregen_jin_kaosu_ya_74_percent_beizhu',
'$guding_aregen_jin_kaosu_ya_89_5_percent',
'$guding_aregen_jin_kaosu_ya_89_5_percent_beizhu',
'$guding_aregen_jin_guan_59_9_percent',
'$guding_aregen_jin_guan_59_9_percent_beizhu',
'$guding_aregen_jin_guan_74_percent',
'$guding_aregen_jin_guan_74_percent_beizhu',
'$guding_aregen_jin_guan_89_5_percent',
'$guding_aregen_jin_guan_89_5_percent_beizhu',
'$guding_aregen_jin_qianti_59_9_percent',
'$guding_aregen_jin_qianti_59_9_percent_beizhu',
'$guding_aregen_jin_qianti_74_percent',
'$guding_aregen_jin_qianti_74_percent_beizhu',
'$guding_aregen_jin_qianti_89_5_percent',
'$guding_aregen_jin_qianti_89_5_percent_beizhu',
'$guding_aregen_jin_zhuanghe_59_9_percent',
'$guding_aregen_jin_zhuanghe_59_9_percent_beizhu',
'$guding_aregen_jin_zhuanghe_74_percent',
'$guding_aregen_jin_zhuanghe_74_percent_beizhu',
'$guding_aregen_jin_zhuanghe_89_5_percent',
'$guding_aregen_jin_zhuanghe_89_5_percent_beizhu',
'$guding_linshiguan_cad',
'$guding_linshiguan_cad_beizhu',
'$guding_linshiguan_cam',
'$guding_linshiguan_cam_beizhu',
'$guding_laxingsheji',
'$guding_laxingsheji_beizhu',
'$guding_jiantaici',
'$guding_jiantaici_beizhu',
'$guding_yayinci',
'$guding_yayinci_beizhu',
'$huodong_sandi_zhijia_da_guge',
'$huodong_sandi_zhijia_da_guge_beizhu',
'$huodong_sandi_zhijia_xiao_guge',
'$huodong_sandi_zhijia_xiao_guge_beizhu',
'$huodong_sandi_zhijia_da_chuntai',
'$huodong_sandi_zhijia_da_chuntai_beizhu',
'$huodong_sandi_zhijia_xiao_chuntai',
'$huodong_sandi_zhijia_xiao_chuntai_beizhu',
'$huodong_zhijia_da_bego',
'$huodong_zhijia_da_bego_beizhu',
'$huodong_zhijia_xiao_bego',
'$huodong_zhijia_xiao_bego_beizhu',
'$huodong_zhijia_da_nuobiling',
'$huodong_zhijia_da_nuobiling_beizhu',
'$huodong_zhijia_xiao_nuobiling',
'$huodong_zhijia_xiao_nuobiling_beizhu',
'$huodong_zhijia_da_weitaling_2000',
'$huodong_zhijia_da_weitaling_2000_beizhu',
'$huodong_zhijia_xiao_weitaling_2000',
'$huodong_zhijia_xiao_weitaling_2000_beizhu',
'$huodong_paiya_kaifeng_zhusuzhuya',
'$huodong_paiya_kaifeng_zhusuzhuya_beizhu',
'$huodong_paiya_kaifeng_zhusuzhuya_labor',
'$huodong_paiya_kaifeng_zhusuzhuya_labor_beizhu',
'$huodong_paiya_kaijing_zhusuzhuya',
'$huodong_paiya_kaijing_zhusuzhuya_beizhu',
'$huodong_paiya_kaijing_zhusuzhuya_labor',
'$huodong_paiya_kaijing_zhusuzhuya_labor_beizhu',
'$huodong_paiya_shofu_zhusuzhuya',
'$huodong_paiya_shofu_zhusuzhuya_beizhu',
'$huodong_paiya_shofu_zhusuzhuya_labor',
'$huodong_paiya_shofu_zhusuzhuya_labor_beizhu',
'$huodong_paiya_changzhengzhong_putong_zhusuzhuya',
'$huodong_paiya_changzhengzhong_putong_zhusuzhuya_beizhu',
'$huodong_paiya_changzhengzhong_putong_zhusuzhuya_labor',
'$huodong_paiya_changzhengzhong_putong_zhusuzhuya_labor_beizhu',
'$huodong_paiya_changzhengzhong_chaoying_zhusuzhuya',
'$huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_beizhu',
'$huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_labor',
'$huodong_paiya_changzhengzhong_chaoying_zhusuzhuya_labor_beizhu',
'$huodong_jiaotuo_suliaotuoya',
'$huodong_jiaotuo_suliaotuoya_beizhu',
'$huodong_jiaotuo_gexinghuatuopan',
'$huodong_jiaotuo_gexinghuatuopan_beizhu',
'$huodong_jiaotuo_jinshuhedian',
'$huodong_jiaotuo_jinshuhedian_beizhu',
'$huodong_jiaotuo_jinshuhemian',
'$huodong_jiaotuo_jinshuhemian_beizhu',
'$huodong_jiaotuo_zhuzaohezhituo',
'$huodong_jiaotuo_zhuzaohezhituo_beizhu',
'$huodong_jiaotuo_chengpinwang',
'$huodong_jiaotuo_chengpinwang_beizhu',
'$huodong_yinxingyichi_da',
'$huodong_yinxingyichi_da_beizhu',
'$huodong_yinxingyichi_xiao',
'$huodong_yinxingyichi_xiao_beizhu',
'$huodong_zhusuzhuya_bankou',
'$huodong_zhusuzhuya_bankou_beizhu',
'$huodong_zhusuzhuya_quankou',
'$huodong_zhusuzhuya_quankou_beizhu',
'$meixue_meibaichaobaotiemian',
'$meixue_meibaichaobaotiemian_beizhu',
'$meixue_maierfangshengquangao',
'$meixue_maierfangshengquangao_beizhu',
'$meixue_maierfangshengquanci',
'$meixue_maierfangshengquanci_beizhu',
'$meixue_zhuci_quanguan',
'$meixue_zhuci_quanguan_beizhu',
'$meixue_zhuci_qianti',
'$meixue_zhuci_qianti_beizhu',
'$meixue_bolitaoci_tiemian',
'$meixue_bolitaoci_tiemian_beizhu',
'$meixue_bolitaoci_qianti',
'$meixue_bolitaoci_qianti_beizhu',
'$meixue_bolitaoci_quanguan',
'$meixue_bolitaoci_quanguan_beizhu',
'$meixue_meixuezhenduanla',
'$meixue_meixuezhenduanla_beizhu',
'$zhengji_yinxingbaochiqi_bankou',
'$zhengji_yinxingbaochiqi_bankou_beizhu',
'$zhengji_wanzhibaochiqi_bankou',
'$zhengji_wanzhibaochiqi_bankou_beizhu',
'$zhengji_jianxibaochiqi',
'$zhengji_jianxibaochiqi_beizhu',
'$zhengji_yemoyatao',
'$zhengji_yemoyatao_beizhu',
'$zhengji_jiaozhengqi_bankou',
'$zhengji_jiaozhengqi_bankou_beizhu',
'$zhengji_luoxuankuogongqi',
'$zhengji_luoxuankuogongqi_beizhu',
'$zhengji_zuhanqi',
'$zhengji_zuhanqi_beizhu',
'$jingmifujian_shuandaofuzhuoti',
'$jingmifujian_shuandaofuzhuoti_beizhu',
'$jingmifujian_qiumaofuzhuoti',
'$jingmifujian_qiumaofuzhuoti_beizhu',
'$jingmifujian_cixingfuzhuoti',
'$jingmifujian_cixingfuzhuoti_beizhu',
'$jingmifujian_mk1',
'$jingmifujian_mk1_beizhu',
'$jingmifujian_taijikou',
'$jingmifujian_taijikou_beizhu',
'$jingmifujian_taotongguan',
'$jingmifujian_taotongguan_beizhu',
'$sandi_shuzhimoxing_bankou',
'$sandi_shuzhimoxing_bankou_beizhu',
'$sandi_shuzhimoxing_quankou',
'$sandi_shuzhimoxing_quankou_beizhu'
)";
if (!mysqli_query($mysqli,$insertCommand)) {
    echo "Insert failed: ".mysqli_error($mysqli)."<br/>";
}else{
    echo "Inserted successfully!"."<br/>";
}
mysqli_close($mysqli);
?>
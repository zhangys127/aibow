var Obj_Age;	
var Obj_Height;
var Obj_Weight;
var Obj_WC;
var Obj_HC;
var Obj_Whole_body_fat_mass;
var Obj_Whole_body_fat_free_mass;
var Obj_Trunk_fat_mass;
var Obj_Trunk_fat_free_mass;
var Obj_Leg_fatfree_mass;
var Obj_Basal_metabolic_rate;
var Objgender;
var sex = 1;//0是女性，1是男性
var result_info;
var result_span;


function init(){
	 Obj_Age="";	
	 Obj_Height="";
	 Obj_Weight="";
	 Obj_WC="";
	 Obj_HC="";
	 Obj_Whole_body_fat_mass="";
	 Obj_Whole_body_fat_free_mass="";
	 Obj_Trunk_fat_mass="";
	 Obj_Trunk_fat_free_mass="";
	 Obj_Leg_fatfree_mass="";
	 Obj_Basal_metabolic_rate="";
	 Objgender="";
	 sex = 1;
	 result_info="";
	 result_span="";
}
function checkForm1() {	
		if ($(Obj_Age).val()!=null && $(Obj_Age).val()!="" && $(Obj_Age).val()>=0 && $(Obj_Age).val()<=120 ) {
			$(Obj_Age).css("border", "");
		} else {
			$(Obj_Age).css("border", "1px solid red");
			$(Obj_Age).focus();
			return false;
		}
		
		if ($(Obj_Height).val()!=null && $(Obj_Height).val()!="" && $(Obj_Height).val()>=50 && $(Obj_Height).val()<=250 ) {
			$(Obj_Height).css("border", "");
		} else {
			$(Obj_Height).css("border", "1px solid red");
			$(Obj_Height).focus();
			return false;
		}
		
		if ($(Obj_Weight).val()!=null && $(Obj_Weight).val()!="" && $(Obj_Weight).val()>=20 && $(Obj_Weight).val()<=250 ) {
			$(Obj_Weight).css("border", "");
		} else {
			$(Obj_Weight).css("border", "1px solid red");
			$(Obj_Weight).focus();
			return false;
		}
		return true;
}
function checkForm2_isnull() {	
		if (($(Obj_WC).val()==null || $(Obj_WC).val()=="") || ($(Obj_HC).val()==null || $(Obj_HC).val()=="")) {
			return true;
		}
		return false;
}

function checkForm2_scope() {	
	if($(Obj_WC).val()!=null && $(Obj_WC).val()!=""){
		if ($(Obj_WC).val()>=15 && $(Obj_WC).val()<=250 ) {
			$(Obj_WC).css("border", "");
		} else {
			$(Obj_WC).css("border", "1px solid red");
			$(Obj_WC).focus();
			return false;
		}
	}
	if($(Obj_HC).val()!=null && $(Obj_HC).val()!=""){
		if($(Obj_HC).val()>=15 && $(Obj_HC).val()<=250 ) {
			$(Obj_HC).css("border", "");
		} else {
			$(Obj_HC).css("border", "1px solid red");
			$(Obj_HC).focus();
			return false;
		}	
	}
	return true;
}

function checkForm3_isnull() {	
	if ($(Obj_Whole_body_fat_mass).val()==null || $(Obj_Whole_body_fat_mass).val()=="" ||
	$(Obj_Whole_body_fat_free_mass).val()==null || $(Obj_Whole_body_fat_free_mass).val()=="" ||
	$(Obj_Trunk_fat_mass).val()==null || $(Obj_Trunk_fat_mass).val()=="" || 
	$(Obj_Trunk_fat_free_mass).val()==null || $(Obj_Trunk_fat_free_mass).val()=="" || 
	$(Obj_Leg_fatfree_mass).val()==null || $(Obj_Leg_fatfree_mass).val()=="" || 
	$(Obj_Basal_metabolic_rate).val()==null || $(Obj_Basal_metabolic_rate).val()==""){
		return true;
	}           
	return false;
}

function checkForm3_scope() {	
	if($(Obj_Whole_body_fat_mass).val()!=null && $(Obj_Whole_body_fat_mass).val()!=""){
		if($(Obj_Whole_body_fat_mass).val()>=0 && $(Obj_Whole_body_fat_mass).val()<=150 ) {
			$(Obj_Whole_body_fat_mass).css("border", "");
		} else {
			$(Obj_Whole_body_fat_mass).css("border", "1px solid red");
			$(Obj_Whole_body_fat_mass).focus();
			return false;
		}
	}
	if($(Obj_Whole_body_fat_free_mass).val()!=null && $(Obj_Whole_body_fat_free_mass).val()!=""){
		if($(Obj_Whole_body_fat_free_mass).val()>=0 && $(Obj_Whole_body_fat_free_mass).val()<=150 ) {
			$(Obj_Whole_body_fat_free_mass).css("border", "");
		} else {
			$(Obj_Whole_body_fat_free_mass).css("border", "1px solid red");
			$(Obj_Whole_body_fat_free_mass).focus();
			return false;
		}
	}
	if($(Obj_Trunk_fat_mass).val()!=null && $(Obj_Trunk_fat_mass).val()!=""){
		if($(Obj_Trunk_fat_mass).val()>=0 && $(Obj_Trunk_fat_mass).val()<=80 ) {
			$(Obj_Trunk_fat_mass).css("border", "");
		} else {
			$(Obj_Trunk_fat_mass).css("border", "1px solid red");
			$(Obj_Trunk_fat_mass).focus();
			return false;
		}
	}
	if($(Obj_Trunk_fat_free_mass).val()!=null && $(Obj_Trunk_fat_free_mass).val()!=""){
		if($(Obj_Trunk_fat_free_mass).val()>=0 && $(Obj_Trunk_fat_free_mass).val()<=80 ) {
			$(Obj_Trunk_fat_free_mass).css("border", "");
		} else {
			$(Obj_Trunk_fat_free_mass).css("border", "1px solid red");
			$(Obj_Trunk_fat_free_mass).focus();
			return false;
		}
	}
	if($(Obj_Leg_fatfree_mass).val()!=null && $(Obj_Leg_fatfree_mass).val()!=""){
		if($(Obj_Leg_fatfree_mass).val()>=0 && $(Obj_Leg_fatfree_mass).val()<=40 ) {
			$(Obj_Leg_fatfree_mass).css("border", "");
		} else {
			$(Obj_Leg_fatfree_mass).css("border", "1px solid red");
			$(Obj_Leg_fatfree_mass).focus();
			return false;
		}
	}
	if($(Obj_Basal_metabolic_rate).val()!=null && $(Obj_Basal_metabolic_rate).val()!=""){
		if($(Obj_Basal_metabolic_rate).val()>=500 && $(Obj_Basal_metabolic_rate).val()<=30000 ) {
			$(Obj_Basal_metabolic_rate).css("border", "");
		} else {
			$(Obj_Basal_metabolic_rate).css("border", "1px solid red");
			$(Obj_Basal_metabolic_rate).focus();
			return false;
		}
	}
	return true;
}
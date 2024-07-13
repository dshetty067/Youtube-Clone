export const API_KEY='your_api_key';

export const value_converter=(val)=>{
    if(val>=1000000){
        return Math.floor(val/1000000)+"M";
    }
    else if(val>=1000){
        return Math.floor(val/1000)+"K";
    }else{
        return val;
    }

}

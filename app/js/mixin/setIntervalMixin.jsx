var setIntervalMixin={
  setInterval:function(cb,intv){
    var token=setInterval(cb,intv);
    this._intervals.push(token);
    return token;
  },
  componentDidMount:function(){
    this._intervals=[];
  },
  componentWillUnmount:function(){
    this._intervals.map(clearInterval);
  }
}
module.exports=setIntervalMixin;

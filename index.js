 function BoardMember(name, homeState, training){
   this.name = name
   this.homeState = homeState
   this.training = training
}

   BoardMember.prototypes.veto = function(){
   return 'No, I must disagree'
   BoardMember.prototypes.approve = function(){
     return 'You can do that!'
   }
   BoardMember.prototypes.doCharity = function(){
    return "I like to help people."
   }

   BoardMember.prototypes.releasePressStatement = function(){
    return "You will see great things from Scuber."
   }

  BoardMember.prototypes.sayHi = function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }

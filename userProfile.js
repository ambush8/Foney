class User {
	constructor(name,wage,hoursWorked,foodWeekly,transportationWeekly,housingMonthly,utilitiesMonthly,clothingMonthly,insuranceMonthly,variousWeekly){
		this.name = Number(name);
		this.wage = Number(wage);
		this.hoursWorked = Number(hoursWorked);
		this.foodWeekly = Number(foodWeekly);
		this.transportationWeekly = Number(transportationWeekly);
		this.housingWeekly= Number(housingMonthly/3.5);
		this.utilitiesWeekly = Number(utilitiesMonthly/3.5);
		this.clothingWeekly = clothingMonthly/3.5;
		this.insuranceWeekly = insuranceMonthly/3.5;
		this.variousWeekly = variousWeekly;
		this.totalIncome = this.wage*hoursWorked;
		this.disIncome = calcDisposible();
	}
	calcDisposible(){
		return this.totalIncome - this.foodWeekly - this.transportationWeekly - this.housingWeekly -this.utilitiesWeekly - this.clothingWeekly - this.insuranceWeekly - this.variousWeekly
	}
}
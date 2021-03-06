class Vehicle {
    private numberOfWheels:number;

    constructor(whls:number) {
        this.numberOfWheels = whls; 
    }

    soundHorn():void {
        console.log('Beep!')
    }

    // Getter - Setter
    getNumberOfWheels():number { return this.numberOfWheels; }
    setNumberOfWheels( nwheels:number ):void { this.numberOfWheels = nwheels; }
}

export = Vehicle;
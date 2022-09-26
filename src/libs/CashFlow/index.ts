//estructuracion de un objeto 

export interface ICashFlow {
    type: 'INCOME' | 'EXPENSE';
    date: Date; 
    amount: number; 
    description: String;
}

export class CashFlow {

    //colleccion de CashFlows de los items
    //lo inicializamos en un arreglo vacio porque pueda que 
    //no tenga elementos

    private cashFlowItems: ICashFlow[] = [];

    public getAllCashFlow (): ICashFlow[] {
        return this.cashFlowItems; // select * from cashflow; 
    }

    public getCashFlowByIndex( index:number): ICashFlow {
        if (index >= 0 && index < this.cashFlowItems.length) {
          return this.cashFlowItems[index];
        }
        throw Error('Index out of range');
      } 
      
    public addCashFlow (cashFlow: ICashFlow): number {

        //verificamos si ya existe el objeto 
        const cashFlowExists= this.cashFlowItems.findIndex((object) => {

            return object.amount === cashFlow.amount && object.description === cashFlow.description
        })

        //si no existe, añadirlo al arreglo 
        if(cashFlowExists < 0) {
            this.cashFlowItems.push(cashFlow)

            //el primer elemento tiene que ser 0 
            //en si, agrega una, pero todo primer elemento
            // de un arreglo es 0, por eso le decimos -1

            return this.cashFlowItems.length -1
        }

        throw Error('Cashflow Exists on Collection')
    }

    public updateCashFlow(index:number, cashFlow:ICashFlow) : boolean {
       //actauliza un cashflow con los datos que enviamos
        if(index >=0 && index < this.cashFlowItems.length) {
            this.cashFlowItems[index] = cashFlow; 
            return true;
        }

        return false;
    }

    public deleteCashFlow (index:number) : boolean {
        if(index >=0 && index < this.cashFlowItems.length) {
            //filtar el array de cashflow items solo por los valores que 
            //sean diferentes al index que enviamos
            this.cashFlowItems= this.cashFlowItems.filter(
                (_obj: ICashFlow, i: Number) => i !== index
            );

            return true;
        }

        return false;
    }

    
}
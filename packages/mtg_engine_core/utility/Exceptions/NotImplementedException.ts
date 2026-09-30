export class NotImplementedException extends Error{

    /**
     *
     */
    constructor(o:Object) {
        super(`Feature not implemented on class ${o.constructor.name}`);
        
    }
} 
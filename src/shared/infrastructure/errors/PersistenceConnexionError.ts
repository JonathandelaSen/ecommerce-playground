import ConstantError from '../../ConstantError'

export default class PersistenceConnexionError extends BaseError {
    TYPE = ConstantError.PERSISTENCE_CONNECTION;

    constructor() {
        super()
        this.code = this.TYPE;
    }
}
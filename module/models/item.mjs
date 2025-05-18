// https://foundryvtt.wiki/en/development/api/DataModel
export default class Item extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        const requiredInteger = { required: true, nullable: false, integer: true };
        const schema = {};

        schema.description = new fields.StringField({ required: false, nullable: false, initial: "" });
        
        schema.formula = new fields.SchemaField({
            value: new fields.StringField({ required: false, nullable: false, initial: "" })
        });
              
        return schema;
    }

    /** @override */
    prepareDerivedData() {
        super.prepareDerivedData();
        let updates = {};

        if (Object.keys(updates).length > 0) {
            this.parent.update(updates);
        }
    }
}
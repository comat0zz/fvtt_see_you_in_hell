// https://foundryvtt.wiki/en/development/api/DataModel
export default class Hero extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        const requiredInteger = { required: true, nullable: false, integer: true };
        const schema = {};

        schema.description = new fields.HTMLField({ required: true, textSearch: true });

        // Раны
        schema.wounds = new fields.SchemaField({
            value: new fields.NumberField({ ...requiredInteger, initial: 5, min: 0, max: 5 })
        });

        // Концепция
        schema.concept = new fields.SchemaField({
            value: new fields.StringField({ required: false, nullable: false, initial: "" }),
            in_use: new fields.BooleanField({ required: false, initial: true })
        });

        // Памятный предмет
        schema.myitem = new fields.SchemaField({
            value: new fields.StringField({ required: false, nullable: false, initial: "" }),
            in_use: new fields.BooleanField({ required: false, initial: true })
        });

        // Ярость
        schema.fury = new fields.SchemaField({
            value: new fields.NumberField({ ...requiredInteger, initial: 1, min: 0 })
        });

        // Подходы
        schema.myitem = new fields.SchemaField({
            value: new fields.StringField({ required: false, nullable: false, initial: "" }), // Unused but kept for compatibility
            // Кровожадный и хладнокровный
            BloodthirstyColdBlooded: new fields.BooleanField({ required: false, initial: true }),
            // Непробиваемый и неуловимый
            ElusiveImpenetrable: new fields.BooleanField({ required: false, initial: true }),
            // Уверенный и расчетливый
            ConfidentCalculating: new fields.BooleanField({ required: false, initial: true }) 
        });

        // Элементы
        schema.elements = new fields.SchemaField({
            value: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 }), // Unused but kept for compatibility
            item_1: new fields.StringField({ required: false, nullable: false, initial: "" }),
            item_2: new fields.StringField({ required: false, nullable: false, initial: "" }),
            item_3: new fields.StringField({ required: false, nullable: false, initial: "" }),
            item_4: new fields.StringField({ required: false, nullable: false, initial: "" }),
            item_5: new fields.StringField({ required: false, nullable: false, initial: "" }),
            item_6: new fields.StringField({ required: false, nullable: false, initial: "" })
        });

        // Карты заданий
        schema.cards = new fields.SchemaField({
            value: new fields.ArrayField(new fields.StringField())
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
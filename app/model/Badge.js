/**
 * Model for a badge
 */
Ext.define('Kort.model.Badge', {
    extend: 'Ext.data.Model',
    config: {
		idProperty: 'id',
		
        fields: [
			{ name: 'id', type: 'auto' },
			{ name: 'name', type: 'string' },
			{ name: 'title', type: 'string' },
			{ name: 'description', type: 'string' },
            { name: 'color', type: 'string' },
			{ name: 'won', type: 'boolean' },
            { name: 'create_date', type: 'string' },
            { name: 'sorting', type: 'int' }
        ]
    }
});
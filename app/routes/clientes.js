import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return[{
			id: '1',
			title: 'Aury Lopes',
			layout: 'Finalizado',
			responsivo: 'Finalizado',
			internas: 'Finalizado',
			entregue: 'Sim'
		},
		{
			id: '2',
			title: 'AKRON/RS',
			layout: 'Finalizado',
			responsivo: 'Finalizado',
			internas: 'Finalizado',
			entregue: 'Sim'
		},
		{
			id: '3',
			title: 'João de Deus',
			layout: 'Finalizado',
			responsivo: 'Finalizado',
			internas: 'Finalizado',
			entregue: 'Sim'
		},
		{
			id: '4',
			title: 'JAWA Led',
			layout: 'Finalizado',
			responsivo: 'Finalizado',
			internas: 'Finalizado',
			entregue: 'Sim'
		},
		{
			id: '5',
			title: 'Orience Gestão',
			layout: 'Não iniciado',
			responsivo: 'Não iniciado',
			internas: 'Não',
			entregue: 'Não'
		}];
	}
});

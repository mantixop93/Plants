import controller from './controller';

export default {
    controller: controller,
    controllerAs: '$listCtrl',
    bindings: {
        greeneries: '=greeneries'
    },
    templateUrl: '/js/src/modules/greeneryList/components/greeneryList/template.html'
}
import controller from './controller';

export default {
    controller: controller,
    controllerAs: '$listCtrl',
    bindings: {
        plants : '=plants'
    },
    templateUrl: '/js/src/modules/greeneryList/components/plantList/template.html'
}
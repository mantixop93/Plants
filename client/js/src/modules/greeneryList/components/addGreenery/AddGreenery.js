import controller from './controller';

export default {
    controller: controller,
    bindings: {
        greeneries: '=greeneries'
    },
    templateUrl: '/js/src/modules/greeneryList/components/addGreenery/template.html'
}
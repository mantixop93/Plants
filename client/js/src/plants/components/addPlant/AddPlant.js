import controller from './controller';

export default {
    controller: controller,
    bindings: {
        plants: '=plants'
    },
    templateUrl: '/js/src/plants/components/addPlant/template.html'
}
import { ref } from 'vue';
import { carsList, carItem, carItemEdit, carItemAdd, carItemDelete } from "../services";

export default function useCars() {
  const cars = ref<any[]>([]);
  const currentCar = ref({
    license: '',
    model: '',
    year: ''
  });
  const loading = ref<boolean>(true);

  function getCars(onSuccess?: (r: any) => void, onError?: (r: any) => void){
    carsList({},
      ({data}) => {
        cars.value = data.cars;
        if(onSuccess) onSuccess(data)
      },
      (response) => {
        if(onError) onError(response)
      }
    )
    loading.value = false;
  }

  function getCar(id: string, onSuccess?: (r: any) => void, onError?: (r: any) => void){
    carItem({id},
      ({data}) => {
        currentCar.value = data;
        if(onSuccess) onSuccess(data)
      },
      (response) => {
        if(onError) onError(response)
      }
    )
    loading.value = false;
  }

  function createCar(onSuccess?: (r: any) => void, onError?: (r: any) => void){
    loading.value = true;
    carItemAdd(currentCar.value,
      ({data}) => {
        if(onSuccess) onSuccess(data)
      },
      (response) => {
        if(onError) onError(response)
      }
    )
    loading.value = false;
  }

  function updateCar(onSuccess?: (r: any) => void, onError?: (r: any) => void){
    loading.value = true;
    carItemEdit(currentCar.value,
      ({data}) => {
        if(onSuccess) onSuccess(data)
      },
      (response) => {
        if(onError) onError(response)
      }
    )
    loading.value = false;
  }

  function deleteCar(id: string, onSuccess?: (r: any) => void, onError?: (r: any) => void){
    loading.value = true;
    carItemDelete({id},
      ({data}) => {
        if(onSuccess) onSuccess(data)
      },
      (response) => {
        if(onError) onError(response)
      }
    )
    loading.value = false;
  }

  function init(){
    getCars();
  }

  return {
    cars,
    loading,
    currentCar,
    init,
    getCar,
    createCar,
    deleteCar,
    updateCar
  }
}
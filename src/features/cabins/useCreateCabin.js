import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createEditCabin } from '../../services/apiCabins';

export function useCreateCabin() {
  const queryClient = useQueryClient();

  // Creating mutation fn
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: (newCabin) => createEditCabin(newCabin),
    onSuccess: () => {
      toast.success('New cabin successfulyy created.');
      queryClient.invalidateQueries({
        queryKey: ['cabin'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}

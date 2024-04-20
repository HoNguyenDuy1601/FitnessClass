import useQuery from './useQuery';

const useQueryParams = (key: string) => {
    const query = useQuery();
    return query.get(key);
};

export default useQueryParams;

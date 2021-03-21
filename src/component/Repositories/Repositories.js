import {useState, useEffect} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import {SEARCH_REPO_QUERY} from '../../graphql/queries/searchRepositoryByGithubId';
import BackButton from '../shared/BackButton';
import Spinner from '../shared/Spinner';
import Pagination from './Pagination';
import NoRepository from './NoRepository';
import styled from 'styled-components';
import RepositoryList from "./RepositoryList";

const Repositories = ({className, ...props}) => {
        const {username} = props.match.params
        const [endCursor, setEndCursor] = useState(null);
        const [startCursor, setStartCursor] = useState(null);
        const [variables, setVariables] = useState({username, first: 20});

        const setCursors = (queryResult) => {
            if (!queryResult) return;

            const {startCursor, endCursor} = queryResult.user.repositories.pageInfo;
            setEndCursor(endCursor);
            setStartCursor(startCursor);
        }

        const [getUserRepositories, {loading, error, data}] = useLazyQuery(SEARCH_REPO_QUERY, {
            onCompleted: result => setCursors(result),
            fetchPolicy: 'network-only',
            variables: variables
        })

        useEffect(() => getUserRepositories(), [])

        if (loading || !data) return <Spinner/>

        if (error) return [<BackButton/>, <div>Error!</div>]

        const onNext = () => {
            const nextPageVariables = {username, first: 20, after: endCursor}
            setVariables(nextPageVariables);
        }

        const onPrevious = () => {
            const nextPageVariables = {username, last: 20, before: startCursor}
            setVariables(nextPageVariables);
        }

        const userHasNoRepository = !data.user || !data.user.repositories.nodes.length

        return (
            <section className={className}>
                <BackButton/>
                {userHasNoRepository
                    ? <NoRepository/>
                    : <>
                        <RepositoryList repositories={data.user.repositories.nodes} />
                        <Pagination pageInfo={data.user.repositories.pageInfo}
                                    handleOnPrevious={onPrevious}
                                    handleOnNext={onNext}/>
                    </>
                }
            </section>
        )
    }
;

export default styled(Repositories)`
  width: 50%;
  margin-left: 25%;
  margin-top: 4rem;
  padding-bottom: 3rem;
`;

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from '../style/Container';
import { Table } from 'antd';
import bg1 from '../static/media/bg.jpg';
import { findCast } from '../actions';
import { Link } from 'react-router-dom';
import { CastTableWrapper, TableDropdownContent } from '../style/CastTableWrapper'


const PeopleList = ({type, movieID, casts, findCastWithId }) => {
   
    useEffect(()=>{
        findCastWithId(type, movieID);
    }, [findCastWithId, type, movieID])

      let dataSource = casts.cast && casts.cast.map(c=>{
        let dataKey = c.cast_id ? c.cast_id : c.id;
          return {
              key: dataKey,
              name: c.name,
              character: c.character,
              profile_path: c.profile_path,
              id: c.id
          }
      });
      
      const innerTable = (record)=>{
            return<>
                <TableDropdownContent>
                    <Link to={`/actor/${record.id}`}>
                        <img src={record.profile_path ? `https://image.tmdb.org/t/p/w500${record.profile_path}` : bg1 } alt={record.name} />
                        <p>{record.name}</p>
                    </Link>
                </TableDropdownContent>
            </>
      }

    const { Column } = Table;

    return ( 
        <>
            {casts.cast && casts.cast.length > 1 && <CastTableWrapper>
                <div className="movie-preview-container" >
                        <Container className="custom-class-container">
                        <Table dataSource={dataSource}> 
                            <Column
                                    title="Cast"
                                    key="name"
                                    render={innerTable}
                                    />
                            <Column  dataIndex="character" key="character" />
                            </Table>
                        </Container>
                    </div>
            </CastTableWrapper>}
        </>
     );
}
 

const mapStateToProps = (state)=>{
    return {
        casts: state.movies.casts
    }
}

export default connect(mapStateToProps, { findCastWithId: findCast})(PeopleList);

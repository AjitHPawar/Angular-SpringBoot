
package com.backend.NgSoft.dao;

import java.util.List;

public interface GenericDao {

	boolean save(Object object);

	boolean saveAll(List<?> object);

	boolean update(Object object);

	boolean saveOrUpdate(Object object);

	boolean delete(Object object);

	boolean deleteAll(Object objects);

	boolean deleteAll(Class<?> o, List<Integer> ids);

	Object getRecordById(Class<?> o, Integer id);

	Object getRecordByIds(Class<?> o, List<Integer> ids);

	Object findByParam(Class<?> o, String fieldName, String value);

	boolean executeUpdate(String query);

	List<String> getTables();

	Object findByParam(Class<?> o, String fieldName, List<String> ids);

}

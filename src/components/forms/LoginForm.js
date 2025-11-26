import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.login) {
      newErrors.login = "Логин обязателен";
    }
    
    if (!formData.password) {
      newErrors.password = "Пароль обязателен";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log("Вход:", formData);
      alert("Вход успешен! (Это временное сообщение)");
      
      setFormData({
        login: "",
        password: ""
      });
      
    } catch (error) {
      console.error("Ошибка входа:", error);
      alert("Ошибка входа: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-form">
      <div className="login-form__container">
        <h2 className="login-form__title">Вход в профиль</h2>
        
        <form onSubmit={handleSubmit} className="login-form__form">
          <div className="form-group">
            <label htmlFor="login" className="form-label">
              Логин
            </label>
            <input
              type="text"
              id="login"
              name="login"
              value={formData.login}
              onChange={handleChange}
              className={`form-input ${errors.login ? 'error' : ''}`}
              placeholder="Введите ваш логин"
              disabled={isSubmitting}
            />
            {errors.login && (
              <span className="error-message">{errors.login}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Пароль
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Введите пароль"
              disabled={isSubmitting}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <div className="login-form__actions">
            <button 
              type="submit" 
              className="login-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Вход..." : "Войти"}
            </button>
            
            <Link to="/register" className="register-link-btn">
              Зарегистрироваться
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

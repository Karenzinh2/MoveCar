import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Clock } from 'lucide-react';
import "bootstrap/dist/js/bootstrap.bundle";
import "./Header.css";

const Header = () => {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({
      location,
      pickupDate,
      pickupTime,
      returnDate,
      returnTime
    });
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#191D88" }}>
        <div className="container-fluid d-flex justify-content-between px-5">
          <Link to="/" className="navbar-brand text-white ff">MoveCar</Link>
          <Link className="btn btn-outline-light" to="/entrar">ENTRAR</Link>
        </div>
      </nav>

      {/* Search Form */}
      <div className="container mt-5 align-items-center justify-content-center p-5">
        <div className="card shadow-lg border-0">
          <div className="card-body">
            <form onSubmit={handleSearch}>
              <div className="row g-5">
                {/* Location Dropdown */}
                <div className="col-md-0">
                  <label className="form-label small fw-bold text-secondary">PATIOS</label>
                  <div className="position-relative">
                    <MapPin
                      className="position-absolute"
                      style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }}
                    />
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="form-select ps-5"
                      style={{ backgroundColor: '#f8f9fa' }}
                    >
                      <option value="">Selecione um pátio</option>
                      <option value="patio1">Pátio 1</option>
                      <option value="patio2">Pátio 2</option>
                    </select>
                  </div>
                </div>

                {/* Pickup Date & Time */}
                <div className="col-md-4">
                  <label className="form-label small fw-bold text-secondary">DATA E HORÁRIO DA RETIRADA</label>
                  <div className="row g-2">
                    <div className="col-6 position-relative">
                      <Calendar
                        className="position-absolute"
                        style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }}
                      />
                      <input
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="form-control ps-5"
                        style={{ backgroundColor: '#f8f9fa' }}
                      />
                    </div>
                    <div className="col-6 position-relative">
                      <Clock
                        className="position-absolute"
                        style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }}
                      />
                      <input
                        type="time"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="form-control ps-5"
                        style={{ backgroundColor: '#f8f9fa' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Return Date & Time */}
                <div className="col-md-4">
                  <label className="form-label small fw-bold text-secondary">DATA E HORÁRIO DA DEVOLUÇÃO</label>
                  <div className="row g-2">
                    <div className="col-6 position-relative">
                      <Calendar
                        className="position-absolute"
                        style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }}
                      />
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="form-control ps-5"
                        style={{ backgroundColor: '#f8f9fa' }}
                      />
                    </div>
                    <div className="col-6 position-relative">
                      <Clock
                        className="position-absolute"
                        style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }}
                      />
                      <input
                        type="time"
                        value={returnTime}
                        onChange={(e) => setReturnTime(e.target.value)}
                        className="form-control ps-5"
                        style={{ backgroundColor: '#f8f9fa' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <div className="col-md-0 d-flex align-items-end justify-content-center align-items-md-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    PESQUISAR
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from 'react';

const ConcreteRequirement = () => {
  const [columns, setColumns] = useState([]);
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [quantity, setQuantity] = useState('');
  const [extraConcrete, setExtraConcrete] = useState(''); // For manually added value
  const [elementName, setElementName] = useState(''); // For naming the element

  const handleAddColumn = () => {
    if (length > 0 && width > 0 && height > 0 && quantity > 0 && elementName) {
      const newColumn = {
        name: elementName,
        length: parseFloat(length),
        width: parseFloat(width),
        height: parseFloat(height),
        quantity: parseInt(quantity, 10),
        id: Date.now(),
      };
      setColumns([...columns, newColumn]);
      // Reset form fields
      setLength('');
      setWidth('');
      setHeight('');
      setQuantity('');
      setElementName('');
    } else {
      alert('Please fill in all fields with positive values and provide a name.');
    }
  };

  const handleRemoveColumn = (id) => {
    setColumns(columns.filter(column => column.id !== id));
  };

  const calculateTotalConcrete = () => {
    const totalFromColumns = columns.reduce((total, column) => {
      const volume = column.length * column.width * column.height; // Volume in cubic meters
      return total + (volume * column.quantity); // Total volume considering quantity
    }, 0).toFixed(2); // Round to 2 decimal places

    return totalFromColumns;
  };

  const finalConcrete = (parseFloat(calculateTotalConcrete()) + (parseFloat(extraConcrete) || 0)).toFixed(2);

  return (
    <div className="w-full md:w-3/4 lg:w-2/3 mx-auto p-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Concrete Requirement Calculator</h2>

      {/* Display Total and Final Concrete Required */}
      <div className="mb-6 flex justify-center items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold">Total Concrete Required</h3>
          <p className="text-xl font-bold">{calculateTotalConcrete()} m³</p>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <label className="block mb-2">Add Extra Concrete (m³):</label>
            <input
              type="number"
              min="0"
              value={extraConcrete}
              onChange={(e) => setExtraConcrete(e.target.value)}
              className="border p-2 rounded w-full"
              placeholder="Enter extra concrete..."
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Final Concrete Required</h3>
            <p className="text-xl font-bold">{finalConcrete} m³</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Form for column dimensions */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Add Column</h3>
          <div className="mb-4">
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              value={elementName}
              onChange={(e) => setElementName(e.target.value)}
              className="border p-2 rounded w-full"
              placeholder="Enter name of the element..."
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Length (m):</label>
            <input
              type="number"
              min="0"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="border p-2 rounded w-full"
              placeholder="Enter length..."
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Width (m):</label>
            <input
              type="number"
              min="0"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="border p-2 rounded w-full"
              placeholder="Enter width..."
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Height (m):</label>
            <input
              type="number"
              min="0"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border p-2 rounded w-full"
              placeholder="Enter height..."
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border p-2 rounded w-full"
              placeholder="Enter number of columns..."
            />
          </div>
          <button
            onClick={handleAddColumn}
            className="px-4 py-2 bg-blue-600 text-white rounded w-full"
          >
            Add Column
          </button>
        </div>

        {/* Column Details */}
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Column Details</h3>
          <div className="space-y-4">
            {columns.map((column) => (
              <div key={column.id} className="bg-white p-4 rounded shadow">
                <p><strong>Name:</strong> {column.name}</p>
                <p><strong>Length:</strong> {column.length} m</p>
                <p><strong>Width:</strong> {column.width} m</p>
                <p><strong>Height:</strong> {column.height} m</p>
                <p><strong>Quantity:</strong> {column.quantity}</p>
                <p className="font-semibold">
                 Unit Volume: {(column.length * column.width * column.height).toFixed(2)} m³
                </p>
                <p className="font-semibold">
                 Total Volume: {(column.length * column.width * column.height *column.quantity).toFixed(2)} m³
                </p>
                <button
                  onClick={() => handleRemoveColumn(column.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded mt-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcreteRequirement;

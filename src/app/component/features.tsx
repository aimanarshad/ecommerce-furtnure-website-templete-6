export default function Features() {
    return (
      <>
        <div className="bg-amber-50 mt-[100px] mb-0 py-6">
          <div className="flex justify-between items-center max-w-6xl mx-auto px-4 space-x-6">
            {/* Feature 1 */}
            <div className="flex items-center space-x-4">
              <img
                src="/trophy.jpeg"
                alt="High Quality"
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">High Quality</h3>
                <p className="text-sm text-gray-600">crafted from top materials</p>
              </div>
            </div>
  
            {/* Feature 2 */}
            <div className="flex items-center space-x-4">
              <img
                src="tick.jpeg"
                alt="Warranty Protection"
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Warranty Protection</h3>
                <p className="text-sm text-gray-600">Over 2 years</p>
              </div>
            </div>
  
            {/* Feature 3 */}
            <div className="flex items-center space-x-4">
              <img
                src="/hand.jpeg"
                alt="Free Shipping"
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Free Shipping</h3>
                <p className="text-sm text-gray-600">Order over 150 $</p>
              </div>
            </div>
  
            {/* Feature 4 */}
            <div className="flex items-center space-x-4">
              <img
                src="face.jpeg"
                alt="24/7 Support"
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">24 / 7 Support</h3>
                <p className="text-sm text-gray-600">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
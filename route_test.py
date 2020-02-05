import unittest
from app import portfolio_app

class TestValidator(unittest.TestCase):

	# executed prior to each test
	def setUp(self):
		portfolio_app.testing = True
		self.portfolio_app = portfolio_app.test_client()

        # executed after each test
    def tearDown(self):
        pass

    def test_home_status_code(self):
        result = self.portfolio_app.get('/')
        self.assertEqual(result.status_code, 200)

if __name__ == '__main__': 
    unittest.main() 
    
